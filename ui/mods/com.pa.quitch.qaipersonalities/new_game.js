var aiPersonalitiesLoaded;

if (!aiPersonalitiesLoaded) {
  aiPersonalitiesLoaded = true;

  function aipPersonalities() {
    try {
      var newPersonalities = _.mapValues(
        {
          aipAggressive: {
            display_name: "!LOC:AIP Aggressive",
            neural_data_mod: 1.33,
          },
          aipAir: {
            display_name: "!LOC:AIP Air",
            percent_open_vehicle: 0,
            percent_open_bot: 0,
            percent_open_air: 1,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_vehicle: 0,
            percent_bot: 0,
            percent_air: 1,
            percent_naval: 0,
            percent_orbital: 0,
          },
          aipAllTerrain: {
            display_name: "!LOC:AIP All-terrain",
            personality_tags: ["Default", "PreventsWaste", "AllTerrain"],
          },
          aipAmphibious: {
            display_name: "!LOC:AIP Amphibious",
            percent_open_vehicle: 0.45,
            percent_open_bot: 0.45,
            percent_open_air: 0.1,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_land: 0.4,
            percent_air: 0.1,
            percent_naval: 0.45,
            percent_orbital: 0.05,
          },
          aipArtillery: {
            display_name: "!LOC:AIP Artillery",
            personality_tags: ["Default", "PreventsWaste", "Artillery"],
          },
          aipAssault: {
            display_name: "!LOC:AIP Assault",
            personality_tags: ["PreventsWaste", "Assault"],
          },
          aipBoomer: {
            display_name: "!LOC:AIP Boomer",
            personality_tags: ["Default", "PreventsWaste", "Boomer"],
          },
          aipBot: {
            display_name: "!LOC:AIP Bot",
            percent_open_vehicle: 0,
            percent_open_bot: 1,
            percent_open_air: 0,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_vehicle: 0,
            percent_bot: 1,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
          },
          aipCautious: {
            display_name: "!LOC:AIP Cautious",
            neural_data_mod: 0.75,
            min_basic_fabbers: 4,
          },
          aipDefender: {
            display_name: "!LOC:AIP Defender",
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.54,
            energy_demand_check: 0.65,
            adv_eco_mod: 1,
            min_basic_fabbers: 4,
          },
          aipEconomist: {
            display_name: "!LOC:AIP Economist",
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            adv_eco_mod: 1,
            min_basic_fabbers: 4,
          },
          aipFabber: {
            display_name: "!LOC:AIP Fabber",
            fabber_to_factory_ratio_basic: 2,
            fabber_alone_on_planet_mod: 4,
            factory_alone_on_planet_mod: 0.25,
          },
          aipFastTech: {
            display_name: "!LOC:AIP Fast Tech",
            adv_eco_mod: 0.85,
            adv_eco_mod_alone: 0.5,
            min_basic_fabbers: 4,
          },
          aipFortress: {
            display_name: "!LOC:AIP Fortress",
            personality_tags: ["Default", "PreventsWaste", "Fortress"],
          },
          aipFoundation: {
            display_name: "!LOC:AIP Foundation",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.75,
            energy_drain_check: 0.85,
            metal_demand_check: 0.75,
            energy_demand_check: 0.85,
          },
          aipHeavy: {
            display_name: "!LOC:AIP Heavy",
            personality_tags: ["PreventsWaste", "Heavy"],
          },
          aipInfernodier: {
            display_name: "!LOC:AIP Infernodier",
            personality_tags: ["PreventsWaste", "Infernodier"],
          },
          aipLand: {
            display_name: "!LOC:AIP Land",
            percent_land: 1,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
          },
          aipLegonisMachina: {
            display_name: "!LOC:AIP Legonis Machina",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_land: 0.55,
            percent_air: 0.35,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.75,
            energy_drain_check: 0.85,
            metal_demand_check: 0.75,
            energy_demand_check: 0.85,
          },
          aipLowTech: {
            display_name: "!LOC:AIP Low Tech",
            adv_eco_mod: 3,
            adv_eco_mod_alone: 2,
          },
          aipMicro: {
            display_name: "!LOC:AIP Micro",
            personality_tags: ["Default", "PreventsWaste", "SlowerExpansion"],
          },
          aipNaval: {
            display_name: "!LOC:AIP Naval",
            percent_open_vehicle: 0,
            percent_open_bot: 0,
            percent_open_air: 1,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_vehicle: 0,
            percent_bot: 0,
            percent_air: 0.25,
            percent_naval: 0.75,
            percent_orbital: 0,
          },
          aipNuker: {
            display_name: "!LOC:AIP Nuker",
            adv_eco_mod: 1,
            personality_tags: ["Default", "PreventsWaste", "Nuker"],
          },
          aipOrbital: {
            display_name: "!LOC:AIP Orbital",
            percent_land: 0.05,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0.95,
          },
          aipRaider: {
            display_name: "!LOC:AIP Raider",
            personality_tags: ["PreventsWaste", "Raider"],
          },
          aipRandom: {
            display_name: "!LOC:AIP Random",
          },
          aipRanked: {
            display_name: "!LOC:AIP Ranked",
            personality_tags: ["PreventsWaste", "Ranked"],
          },
          aipRevenants: {
            display_name: "!LOC:AIP Revenants",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_land: 0.15,
            percent_air: 0.15,
            percent_naval: 0.1,
            percent_orbital: 0.6,
            metal_drain_check: 0.75,
            energy_drain_check: 0.85,
            metal_demand_check: 0.75,
            energy_demand_check: 0.85,
          },
          aipRush: {
            display_name: "!LOC:AIP Rush",
            percent_bot: 0.95,
            percent_vehicle: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0.05,
            neural_data_mod: 1.33,
            adv_eco_mod: 2,
          },
          aipSniper: {
            display_name: "!LOC:AIP Sniper",
            personality_tags: ["PreventsWaste", "Sniper"],
          },
          aipSwarm: {
            display_name: "!LOC:AIP Swarm",
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
          },
          aipSynchronous: {
            display_name: "!LOC:AIP Synchronous",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.75,
            energy_drain_check: 0.85,
            metal_demand_check: 0.75,
            energy_demand_check: 0.85,
          },
          aipTank: {
            display_name: "!LOC:AIP Tank",
            percent_open_vehicle: 1,
            percent_open_bot: 0,
            percent_open_air: 0,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_vehicle: 1,
            percent_bot: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
          },
          aipTurtle: {
            display_name: "!LOC:AIP Turtle",
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.54,
            energy_demand_check: 0.65,
            neural_data_mod: 0.5,
            adv_eco_mod: 0.85,
            adv_eco_mod_alone: 0.5,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 4,
            factory_alone_on_planet_mod: 0.25,
            min_basic_fabbers: 4,
          },
        },
        function (personality, name) {
          var result = _.assign(
            _.clone(model.aiPersonalities().Absurd),
            personality
          );
          result.name = name;
          return result;
        }
      );

      _.assign(model.aiPersonalities(), newPersonalities);
      model.aiPersonalities.valueHasMutated();

      model.startGame = (function () {
        var cached_function = model.startGame;

        return function () {
          var absurdPersonalities = _.assign(
            _.omit(newPersonalities, "aipRandom"),
            _.pick(ai_types(), "Absurd")
          );

          _.forEach(model.armies(), function (army) {
            _.forEach(army.slots(), function (slot) {
              if (slot.ai() === true && slot.aiPersonality() === "aipRandom")
                slot.aiPersonality(_(absurdPersonalities).keys().sample());
            });
          });

          var result = cached_function.apply(this, arguments);

          return result;
        };
      })();
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  aipPersonalities();
}
