# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

AI-Personalities (shipped as "Penchant AI", mod identifier
`com.pa.quitch.qaipersonalities`) is a **server** mod for Planetary Annihilation:
TITANS. It adds ~35 new AI personalities to Skirmish and Multiplayer, each a
variation on the base game's `Absurd` personality. It ships as plain JS and JSON
loaded by the game - there is no build step, only lint/format.

It deliberately does **not** affect Galactic War (`GW-AI-Overhaul` covers that), and
does not interfere with the Queller AI, which selects a different AI tree via its
personalities' `ai_path` field.

Two external trees matter when working here, neither part of this repo:

- **The base game install** - a `media` folder under Steam's
  `.../Planetary Annihilation Titans/`, at a different path on every machine. If it is
  set up as an additional workspace root it appears in "Additional working directories" at session
  start and has its own `CLAUDE.md`; use that rather than assuming a path. Treat it as
  read-only reference - it is the _only_ way to see what a file this mod shadows
  looked like before, and where the AI build-condition vocabulary is documented by
  example. Never edit anything there.
- **`GW-AI-Overhaul`** (a client mod, usually a sibling workspace root) - packages a
  copy of this mod's penchant data as its own `pa/ai_penchant/` tree. See "Relationship
  to GW-AI-Overhaul" below.

## Commands

There are no npm scripts and no tests. Run the tools directly:

```bash
npm ci                  # install pinned tooling (once / after deps change)
npx eslint .            # ES5/Chrome 40 + correctness lint
npx prettier --check .  # formatting
npx prettier --write .  # apply formatting
```

Both are clean as of the current `develop`; treat any failure as something your change
introduced. There is no CI in this repo (no `.github/`), so these are the only gates
and they are manual. `sonar-project.properties` is read by SonarCloud automatic
analysis; `sonar.projectVersion` is bumped at release along with `modinfo.json`.

### Why `.prettierrc` says what it says

Both settings are load-bearing - do not drop the file and fall back to Prettier 3's
defaults:

- `"trailingComma": "es5"`. The default `"all"` puts trailing commas in _function call
  arguments_, which is ES2017 syntax **Chrome 40 cannot parse** - Prettier would
  silently reformat `ui/**/*.js` into a file the game fails to load.
  `eslint.config.mjs`'s `ecmaVersion: 6` catches it as a parse error, which is the
  backstop that config's comment refers to, but the Prettier setting is the real fix.
- `"endOfLine": "auto"`. `.gitattributes` sets `* text=auto`, so the repo stores LF
  while a Windows checkout has CRLF in the working tree. Under the default `"lf"`,
  `prettier --check .` flags every file in the repo on Windows.

`.prettierignore` covers only `node_modules` and `package-lock.json`, so `pa/**` **is**
formatted here - see Conventions.

## Architecture

### How a personality is defined

The base game's `ui/main/game/new_game/js/ai.js` builds `model.aiPersonalities` as a
map of personality objects, and already establishes the exact pattern this mod uses:
Queller's personalities there are `_.assign(_.clone(paAI.Absurd), personality)`, i.e.
a sparse diff layered over `Absurd`.

`ui/mods/com.pa.quitch.qaipersonalities/new_game.js` is the whole of this mod's code.
It is injected into the `new_game` scene (`modinfo.json`'s `scenes` block) as a plain
script - not AMD - guarded by a `penchantAILoaded` flag against double-injection, and
wrapped in a try/catch that logs rather than throwing. It:

1. Declares `aipPersonalities`, one sparse object per personality, each merged over a
   clone of `model.aiPersonalities().Absurd`, then assigned back into
   `model.aiPersonalities()` followed by `valueHasMutated()` so the UI picks them up.
2. Hijacks `model.startGame`, caching the original and calling it after resolving any
   slot still set to `aipRandom` into a concrete personality.

Because everything is a diff over `Absurd`, **all personalities are Absurd-difficulty**.
There is no way to offer them at lower difficulties, since in PA terms a difficulty
_is_ a personality (README FAQ).

A personality diff has exactly two levers:

- **Numeric/boolean fields from the `Absurd` schema** - `percent_vehicle` /
  `percent_bot` / `percent_air` / `percent_naval` / `percent_orbital` (the unit-type
  mix; the five should total 1.0, counting the values inherited from Absurd for any
  you omit), `fabber_to_factory_ratio_basic` / `_advanced`, `min`/`max_basic_fabbers`,
  `min`/`max_advanced_fabbers`, `adv_eco_mod` / `adv_eco_mod_alone` (lower = techs to
  T2 sooner - Fast Tech uses 0.5, Low Tech 3), `neural_data_mod` (higher = more
  willing to attack, less likely to retreat - Aggressive 2, Absurd 1, Cautious 0.75,
  Turtle 0.5), `metal`/`energy_drain_check`, `metal`/`energy_demand_check`,
  `basic_to_advanced_factory_ratio`, `factory_alone_on_planet_mod`,
  `fabber_alone_on_planet_mod`. The full field set is whatever `Absurd` defines in the
  base game's `ai.js` - look there, not here, for the authoritative list.
- **`personality_tags`** - the bridge to the build data under `pa/ai/`. Overriding this
  field _replaces_ Absurd's `["Default", "PreventsWaste"]` outright, so a tag list that
  needs those must restate them (most do; a few deliberately drop `Default`).

README.md documents the intended behaviour of every personality in prose and is the
place to update when adding or retuning one.

### The penchant mechanism (`pa/ai/**`)

Personality tags are consumed by the server-side AI through the `HasPersonalityTag`
build condition, a base-game test (`{"test_type": "HasPersonalityTag", "string0":
"<tag>", "boolean": true|false}`). The mod uses it in two opposite directions, and
telling them apart is the key to reading this tree:

- **`Penchant*` tags, always `boolean: false`, in shadowed base files.** These are
  _suppressors_. `pa/ai/factory_builds/factory_land_builds.json` etc. are copies of the
  base game's files with a `HasPersonalityTag <tag> false` clause prepended to every
  condition group of the affected entries. A personality carrying `PenchantT1Bot`
  therefore stops using the stock T1 bot builds, freeing it to use a penchant file
  instead. The suppressor tags are `PenchantT1Bot`, `PenchantT2Bot`,
  `PenchantT1Vehicle`, `PenchantT2Vehicle`, `PenchantT2Air`, `PenchantT1Naval`,
  `PenchantT2Naval`, `PenchantT1Defence`, `PenchantT2Defence`, `PenchantPlatoon`.
- **Behaviour tags, always `boolean: true`, in `penchants/` subdirectories.** These are
  _enablers_: `Artillery`, `Fortress`, `Nuker`, `Minelayer`, `Tactical`, `Raider`,
  `Sniper`, `Heavy`, `Assault`, `Boomer`, `Infernodier`, `AllTerrain`, `Platoon`,
  `NoPercentage`, plus `GWAlly` (used only by `factory_builds/penchants/subcommander.json`,
  which exists for GW-AI-Overhaul's Smart Subcommanders and is inert here). Each
  `penchants/<name>.json` is a new build list whose every entry is gated on its tag, so
  it is dead weight for any personality that does not carry it.

`NoPercentage` is a special case: it gates whole alternative platoon builds _and_
templates (`platoon_builds/penchants/no_percentage.json`,
`platoon_templates/penchants/no_percentage.json`) that ignore the `percent_*` army-mix
weighting entirely, for personalities that compose armies by unit role instead.

The `penchants/` subdirectory is not a special name to the engine - the AI discovers
build files by scanning the manager directory recursively (the base game's own Queller
tree does the same with `subpersonalities/`). It is purely an organisational
convention, and grouping by tag there is what keeps this mod's additions separable
from its base-file shadows.

**Why it shadows rather than forking a tree.** These personalities are _modifications
of the base game AI_, not separate AIs, so by design they carry no `ai_path` and read
the default `pa/ai/` tree - the same one stock `Absurd`/`Hard`/etc. use. That is what
makes them compose with the vanilla brain (and what keeps them orthogonal to Queller,
which does fork via `ai_path`).

The consequence to respect: shadowing `pa/ai/**` puts the mod's build data in front of
_every_ vanilla AI, and the only thing keeping stock personalities behaving identically
is that every clause the mod adds is a `Penchant*` tag test they fail. **Any edit to a
shadowed base file that is not gated behind a `Penchant*` tag silently retunes the
vanilla AI.** That is the single most important invariant in this repo.

Consequently, only the files that actually needed a gate are shipped here - unlike
`GW-AI-Overhaul`'s `pa/ai_penchant/`, this is not a complete AI tree, and `unit_maps/`,
`neural_networks/`, `ai_config.json` and the untouched build files are left to the base
game. Note also that TITANS' versions of most of these files live under `pa_ex1/ai/` on
disk but are addressed as `/pa/ai/...` at runtime, which is why the mod's copies sit at
`pa/ai/` - when diffing against the base install, check `pa_ex1/ai/` first and fall back
to `pa/ai/`.

Shadowed files are full copies, not diffs, so a base-game patch to the parts this mod
did not touch is silently lost until someone re-syncs by hand. When PA updates, re-diff
every file under `pa/ai/` against the install and re-apply the `Penchant*` gates on top
of the new base content. `modinfo.json`'s `build` field records the PA build the mod was
last verified against.

### MLA-only personalities and `aipRandom`

Many penchant build lists name MLA units directly, so they do nothing under a faction
mod such as Legion. Those personalities are marked two ways:

- their **key** ends in `Mla` (`aipRaiderMla`, `aipSniperMla`, ...), and
- their **display name** carries a `" (MLA)"` suffix.

Only the key suffix is functional, and the display suffix is cosmetic - but the two
must be kept in step, because the display suffix is the only visible signal that a
personality needs the key suffix. `filterValidPersonalities` partitions
`model.aiPersonalityNames()` on `_.endsWith(name, "Mla")` and, for a slot whose
commander is not one of the four MLA commanders (`isMLA` prefix-matches
`/pa/units/commanders/{imperial,quad,raptor,tank}_`), restricts the `aipRandom` draw to
the non-MLA set. `aipRandom` itself is always excluded from the draw.

README.md is the third place this set is recorded, as a "Does not support factions"
bullet per personality. All three agree as of the current `develop`, so an MLA-only
personality needs the key suffix, the display suffix **and** the README bullet.

**Decide the marking from the data, not from a neighbouring entry.** Both directions
have already gone wrong once: `aipMinelayer` displayed `" (MLA)"` without the key
suffix, so Random offered it to faction commanders (fixed by renaming to
`aipMinelayerMla`); `aipPlatoon` was marked MLA-only by copy-paste from `aipRaiderMla`
despite working fine under factions (marking removed). The test is what the
personality's penchant files ultimately reference:

- **Concrete unit specs** - a factory/fabber build whose `to_build` is a spec name such
  as `AdvancedGunship` or `BasicArtillery` (see `factory_builds/penchants/raider.json`).
  Those names are MLA-only, so the personality is too.
- **Unit-type expressions** - a platoon build whose `to_build` is a _template_ name,
  resolving to `platoon_templates.json` entries composed of `unit_types` strings like
  `"((Tank | Bot) & Mobile) - Fabber - Titan"` (see
  `platoon_builds/penchants/platoon_land.json`). Faction units carry the same type tags,
  so these work everywhere - which is why Platoon is not MLA-only.

### Localisation

Display names use PA's `!LOC:` prefix, and the key is written as a concatenation -
`"!LOC:AIP All-terrain" + " (MLA)"` - specifically so the `(MLA)` suffix stays _out_
of the translatable key. `aipTacticalMla` breaks this (`"!LOC:AIP Tactical (MLA)"`,
suffix inside the key); match the concatenated form for new entries.
`ui/main/_i18n/locales/pt-BR/ai_personalities.json` is the only shipped locale and
covers a subset of personalities; keys there must match the `!LOC:` string exactly.
PA merges every locale file into one flat bundle, so a key added here collides
globally.

## Relationship to GW-AI-Overhaul

`GW-AI-Overhaul` vendors this mod's penchant data as `pa/ai_penchant/`, a _complete_
AI tree (all base files copied, not just the gated ones), selected per-personality via
`ai_path` by GWO's `shared/ai.js`. Path mapping is `pa/ai/<x>` here ->
`pa/ai_penchant/<x>` there.

The two copies differ in formatting by design (minified single-line there, 2-space
Prettier here), so compare them as **parsed JSON**, never as text. On that basis they
are meant to stay in sync and mostly are - at time of writing 28 of the 40 files match
exactly - but they **do** drift, and the drift is silent because nothing checks it. Current known divergences are small and look accidental rather than
intentional (e.g. `fabber_builds/penchants/artillery.json` tests
`"Structure - Metal"` here vs `"Structure - MetalProduction"` in GWO;
`platoon_builds/penchants/platoon_amphibious.json` entry names are prefixed
`"Platoon - "` in GWO only). When changing a penchant file, diff the GWO counterpart
and port the change deliberately in whichever direction is correct - and expect to
find pre-existing differences unrelated to your change, which are not automatically
yours to fix.

GWO-specific content that lives here but is inert in this mod (the `GWAlly` tag in
`factory_builds/penchants/subcommander.json`) exists so the two copies can stay
identical; leave it in place.

## Conventions

- Shipped game code must be ES5/Chrome 40 compatible. `eslint.config.mjs` enforces this
  as a **whitelist**, not a denylist: `eslint-plugin-es-x`'s `flat/restrict-to-es5`
  applies to `ui/**`, then individual rules are switched off for what Chrome 40 really
  supports. That whitelist is exhaustive rather than as-needed, so it doubles as the
  answer to "may I use X?" - no entry means no. Each entry carries the Chrome version
  that shipped the feature, from `@mdn/browser-compat-data`. Four restrictions are
  restated as explicit errors with reasons: `let`/`const`, block-scoped function
  declarations, and `String.prototype.startsWith`/`endsWith` (PA's engine polyfills
  these in one-argument form, so a position argument is silently dropped and returns a
  _wrong_ answer rather than throwing - use `indexOf`/`slice`). `ecmaVersion` is pinned
  at 6 as a backstop and cannot be lowered to 5, since `for...of` would then become an
  unsuppressible parse error that skips every other rule in the file. The config file's
  own comments explain each decision in full - read them before changing it.
  `lodash` (`_`) and jQuery are available as globals in shipped code and are the
  idiomatic tools here.
- `pa/**` JSON in this repo **is** Prettier-formatted (2-space), unlike
  `GW-AI-Overhaul` where the equivalent tree is intentionally minified and
  Prettier-ignored. Keep it that way; do not import GWO's minification convention.
- Changes should touch only what the request needs - no drive-by reformatting.
- `.gitattributes` `export-ignore` entries keep development files (including this one)
  out of the release ZIP, which is produced by `git archive`. Add new dev-only files
  there.

## Release flow

Work happens on `develop`; `master` carries releases, tagged `vX.Y.Z`. `develop`'s
`modinfo.json` deliberately differs from `master`'s - it uses the identifier
`com.pa.quitch.qaipersonalities-dev` and display name `Penchant AI DEV` so a dev build
can be installed alongside the released one. Do not "fix" that difference or let it
reach `master`.

A "Prep for release" commit bumps `version` (and usually `build`, the PA build number)
in `modinfo.json`, `sonar.projectVersion` in `sonar-project.properties`, and adds a
dated CHANGELOG.md section listing the behaviour changes in user-facing terms.
