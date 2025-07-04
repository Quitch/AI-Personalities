# CHANGELOG

## v3.5.0 - 2025-07-04

- Fix Tactical not building Catapults in response to threats
- Implement support for the Ward, Nyx, and Kessler
- Removed AIP Meta

## v3.4.2 - 2025-03-13

- Fix Booms not being sent through teleporters

## v3.4.1 - 2024-07-31

- Fix anti-air in the Unit Cannon not properly considering air threat

## v3.4.0 - 2024-04-22

- Support Kaiju using teleporters

## v3.3.0 - 2024-03-13

- Limit minelaying to AIP Fortress and the new AIP Minelayer

## v3.2.0 - 2024-03-11

- AIP Swarm uses more advanced fabbers
- Fixed name of AIP Platoon in selection box

## v3.1.0 - 2024-02-28

- AIP Swarm now focuses on a high ratio of T1 to T2
- Added AIP Factory which focuses on factories over other structures i.e. what AIP Swarm used to be
- Future-proof MLA detection by AIP Random

## v3.0.1 - 2024-02-01

- Fixed some personalities using too many bots and tanks

## v3.0.0 - 2024-01-31

- Changed how the AI is implemented to make MLA AIs stick to their penchant
- Added AIP Platoon which prefers to use a smaller number of larger armies
- AIP Artillery and AIP Fortress will build the Lob

## v2.5.0 - 2023-06-24

- Updated for PA 116982

## v2.4.1 - 2022-08-08

- Fixed mod icon

## v2.4.0 - 2022-08-04

- Added AIP Tactical

## v2.3.0 - 2022-07-23

- AIP Defender doesn't tech early
- Removed AIP Micro

## v2.2.0 - 2022-07-11

- Fixed certain personalities causing faction AIs to try to build things they could not
- Fixed Stinger builds not working when AI Bugfixes and Enhancements mod was not present
- Personalities which don't work with other factions now marked MLA
- AIP Random excludes MLA personalities if the AI is using a Legion or Bugs commander

## v2.1.1 - 2022-07-06

- Fixed Meta not building vehicles correctly

## v2.1.0 = 2022-06-27

- Added Torpedo Launchers to Fortress's builds
- Artillery gives a higher priority to artillery
- Nuker gives a higher priority to nukes
- Boomer likes Locusts too
- Commanders will always open with their favourite factory type due to flaws uncovered in the percent*open* implementation
- Updated AIP Ranked's builds
- Renamed mod to Penchant AI
- Renamed AIP Ranked to AIP Meta

## v2.0.0 - 2021-07-11

- Added AIP Raider which prefers to use fast units
- Added AIP Sniper which prefers to use long-range units
- Added AIP Heavy which prefers to use armoured units
- Added AIP Infernodier which prefers to use long-range and armoured units
- Added AIP Micro which expands more cautiously
- Added AIP All Terrain which prefers to use hover and amphibious units
- Added AIP Ranked which prefers units used at the top of the ladder
- Added AIP Boomer which likes to use a lot of Booms
- Added AIP Artillery which likes to use static artillery and Catapults
- Added AIP Nuker which likes to build nukes
- Added AIP Fortress which likes to build defences
- Added AIP Assault which prefers to use assault units
- Mod is now TITANS only due to dependency on TITANS units

## v1.9.0 - 2021-04-25

- Added AIP Amphibious which uses a mix of land and naval forces

## v1.8.0 - 2021-04-25

- AIP Bot and AIP Tank use less air
- AIP Turtle is more likely to attack
- Reverted to default opening factory for AIP Economist, AIP Fast Tech, AIP Land, and AIP Swarm
- Added opening factory requirements to unit type specialised personalities to future proof against Absurd personality changes
- Removed changes to minimum fabber numbers from AIP Swarm
- AIP Fast Tech and AIP Turtle take slightly longer to tech
- Increased orbital focus of AIP Orbital

## v1.7.1 - 2021-04-14

- Ensure AIP Random doesn't pick a personality from any other AI mod

## v1.7.0 - 2020-10-07

- Added AIP Fabber which likes to use more basic fabbers
- Turtle uses less factories when alone on a planet

## v1.6.1 - 2020-10-05

- Removed translations for languages where PA includes an official translation

## v1.6.0 - 2020-10-05

- Added AIP Random which will assign a random personality
- Rush techs earlier

## v1.5.3 - 2020-07-12

- All AIP prefixes have had the hyphen removed to resolve a crash issue

## v1.5.2 - 2020-06-26

- Updated for changes to Absurd personality

## v1.5.1 - 2020-06-04

- All translations now use the AIP prefix for difficulty levels

## v1.5.0 - 2020-05-29

- Attempted to make Turtle slightly more viable
- Turtle has a higher focus on non-factory structures
- Fast Tech spends a little more time building a T1 presence before teching
- All personalities given a small requirement for orbital to ensure proper operation on multi-planet systems
- Swarm starts with more fabbers
- Bot and Tank will use some air
- Land more evenly splits between bots and tanks
- Some personalities now have first factory preferences
- Updated pt-BR translation with thanks to CmdrEdem
- Added partial pl-PL translation with thanks to Craeox

## v1.4.0 - 2020-05-20

- Turtle is more of a turtle
- Split Galactic War into four distinct personalities: Legonis Machina, Foundation, Synchronous, and Revenants
- Added Swarm
- Added Defender
- Added Economist
- Prefixed all personalities with AIP and removed Absurd from the name
- Reduced the total number of fabbers that Turtle will use

## v1.3.0 - 2020-01-01

- Ensure Absurd Naval opens with air
  - This doesn't always work in 113953 due to a bug which will hopefully be patched at some point
- Absurd Turtle opens with more fabbers
- Fix missing air value for Absurd Bot

## v1.2.0 - 2019-09-16

- Tidied up personality injection script
- Added Russian (ru) translation with thanks to something more than human

## v1.1.1 - 2019-01-04

- Put Absurd Galactic War into alphabetical position on the list

## v1.1.0 - 2019-01-03

Please help [translate AI Personalities](https://poeditor.com/join/project/3u9vtw8xUf) to your local language.

- Add Absurd Galactic War personality using settings from Galactic War Absurd difficulty
- Absurd Land favours vehicles over bots in alignment with Absurd's default weightings
- Absurd Low Tech will tech a little faster when alone
- Absurd Cautious is less cautious
- Absurd Aggressive is less aggressive
- Add a small amount of air into Absurd Naval
- Absurd Rush is less aggressive
- Removed Absurd Balanced due to tendency to stop building factories
- Added the default amount of orbital back to Absurd Bot and Tank
- Added some land weightings to Absurd Orbital

## v1.0.2 - 2018-03-03

- Made an adjustment to ensure land personality settings were respected
- Sorted personality order alphabetically

## v1.0.1 - 2017-11-17

- Updated for changes to Absurd personality in 108271

## v1.0 - 2017-04-02

- Absurd Balanced now correctly named
- Added language support:
  - Deutsch (de)
  - English (en-US)
  - Français (fr)
  - Italiano (it)
  - Español (es)
  - Nederlands (nl)
  - Nederlands (België) (nl-BE)
- Better mod description

## v0.2 - 2017-03-24

The AI Personalities **Client** is no longer required and should be uninstalled.

- Expanded name to avoid confusion with wondible's mod
- Properly tagged mod to show support for PA classic and Titans
- Dropped unnecessary client mod
- mikeyh updated personality script to account for changes in 99377

## v0.1 - 2017-03-17

- Implemented 13 personalities
