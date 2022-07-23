var aiPersonalitiesLoaded;

if (!aiPersonalitiesLoaded) {
  aiPersonalitiesLoaded = true;

  function setupAipPersonalities() {
    try {
      var aipPersonalities = _.mapValues(
        {
          aipAggressive: {
            display_name: "!LOC:AIP Aggressive",
            neural_data_mod: 1.33,
          },
          aipAir: {
            display_name: "!LOC:AIP Air",
            percent_vehicle: 0,
            percent_bot: 0,
            percent_air: 1,
            percent_naval: 0,
            percent_orbital: 0,
          },
          aipAllTerrainMla: {
            display_name: "!LOC:AIP All-terrain" + " (MLA)",
            personality_tags: ["Default", "PreventsWaste", "AllTerrain"],
          },
          aipAmphibious: {
            display_name: "!LOC:AIP Amphibious",
            percent_land: 0.4,
            percent_air: 0.1,
            percent_naval: 0.45,
            percent_orbital: 0.05,
          },
          aipArtilleryMla: {
            display_name: "!LOC:AIP Artillery" + " (MLA)",
            personality_tags: ["Default", "PreventsWaste", "Artillery"],
          },
          aipAssaultMla: {
            display_name: "!LOC:AIP Assault" + " (MLA)",
            personality_tags: ["PreventsWaste", "Assault"],
          },
          aipBoomerMla: {
            display_name: "!LOC:AIP Boomer" + " (MLA)",
            personality_tags: ["Default", "PreventsWaste", "Boomer"],
          },
          aipBot: {
            display_name: "!LOC:AIP Bot",
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
          aipFortressMla: {
            display_name: "!LOC:AIP Fortress" + " (MLA)",
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
          aipHeavyMla: {
            display_name: "!LOC:AIP Heavy" + " (MLA)",
            personality_tags: ["PreventsWaste", "Heavy"],
          },
          aipInfernodierMla: {
            display_name: "!LOC:AIP Infernodier" + " (MLA)",
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
          aipMetaMla: {
            display_name: "!LOC:AIP Meta" + " (MLA)",
            personality_tags: ["PreventsWaste", "Meta"],
          },
          aipNaval: {
            display_name: "!LOC:AIP Naval",
            percent_vehicle: 0,
            percent_bot: 0,
            percent_air: 0.25,
            percent_naval: 0.75,
            percent_orbital: 0,
          },
          aipNukerMla: {
            display_name: "!LOC:AIP Nuker" + " (MLA)",
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
          aipRaiderMla: {
            display_name: "!LOC:AIP Raider" + " (MLA)",
            personality_tags: ["PreventsWaste", "Raider"],
          },
          aipRandom: {
            display_name: "!LOC:AIP Random",
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
          aipSniperMla: {
            display_name: "!LOC:AIP Sniper" + " (MLA)",
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

      _.assign(model.aiPersonalities(), aipPersonalities);
      model.aiPersonalities.valueHasMutated();

      // assign random personalities when Start Game clicked
      model.startGame = (function () {
        var cachedFunction = model.startGame;

        return function () {
          var isModFaction = function (slot) {
            var factionCommander = ["l_", "bug_"];
            return _.some(factionCommander, function (commander) {
              return _.includes(slot.commander(), commander);
            });
          };

          var validPersonalities = function (personalityNames) {
            return _.filter(personalityNames, function (name) {
              return !_.startsWith(name, "aipRandom");
            });
          };

          var selectPersonality = function (personalityNames) {
            return _.sample(personalityNames);
          };

          var aipPersonalityNames = _.keys(aipPersonalities);
          var mlaPersonalities = _.filter(
            model.aiPersonalityNames(),
            function (personality) {
              return _.endsWith(personality, "Mla");
            }
          );
          var noMlaPersonalities = _.xor(aipPersonalityNames, mlaPersonalities);

          var filterValidPersonalities = function (slot) {
            if (isModFaction(slot)) {
              return validPersonalities(noMlaPersonalities);
            } else {
              return validPersonalities(aipPersonalityNames);
            }
          };

          _.forEach(model.armies(), function (army) {
            _.forEach(army.slots(), function (slot) {
              if (slot.ai() === true && slot.aiPersonality() === "aipRandom") {
                var availablePersonalities = filterValidPersonalities(slot);
                var chosenPersonality = selectPersonality(
                  availablePersonalities
                );
                slot.aiPersonality(chosenPersonality);
              }
            });
          });

          return cachedFunction.apply(this, arguments);
        };
      })();
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  setupAipPersonalities();
}
