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
            personality_tags: [
              "Default",
              "PreventsWaste",
              "AllTerrain",
              "PenchantT1Bot",
              "PenchantT2Bot",
              "PenchantT1Vehicle",
              "PenchantT2Naval",
            ],
          },
          aipAmphibious: {
            display_name: "!LOC:AIP Amphibious",
            percent_vehicle: 0.2,
            percent_bot: 0.2,
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
            personality_tags: [
              "PreventsWaste",
              "Assault",
              "PenchantT2Air",
              "PenchantT1Bot",
              "PenchantT1Vehicle",
              "PenchantT2Vehicle",
              "PenchantT1Naval",
              "PenchantT2Naval",
            ],
          },
          aipBoomerMla: {
            display_name: "!LOC:AIP Boomer" + " (MLA)",
            personality_tags: [
              "Default",
              "PreventsWaste",
              "Boomer",
              "PenchantT1Bot",
              "PenchantT2Bot",
            ],
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
          aipFactory: {
            display_name: "!LOC:AIP Factory",
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
          },
          aipFastTech: {
            display_name: "!LOC:AIP Fast Tech",
            adv_eco_mod: 0.85,
            adv_eco_mod_alone: 0.5,
            min_basic_fabbers: 4,
          },
          aipFortressMla: {
            display_name: "!LOC:AIP Fortress" + " (MLA)",
            personality_tags: [
              "Default",
              "PreventsWaste",
              "Fortress",
              "PenchantT1Defence",
              "PenchantT2Defence",
            ],
          },
          aipFoundation: {
            display_name: "!LOC:AIP Foundation",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_vehicle: 0.025,
            percent_bot: 0.025,
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
            personality_tags: [
              "PreventsWaste",
              "Heavy",
              "NoPercentage",
              "PenchantT2Air",
              "PenchantT1Bot",
              "PenchantT2Bot",
              "PenchantT1Vehicle",
              "PenchantT2Vehicle",
              "PenchantT1Naval",
              "PenchantT2Naval",
            ],
          },
          aipInfernodierMla: {
            display_name: "!LOC:AIP Infernodier" + " (MLA)",
            personality_tags: [
              "PreventsWaste",
              "Infernodier",
              "NoPercentage",
              "PenchantT1Bot",
              "PenchantT2Bot",
              "PenchantT1Vehicle",
              "PenchantT2Vehicle",
            ],
          },
          aipLand: {
            display_name: "!LOC:AIP Land",
            percent_vehicle: 0.5,
            percent_bot: 0.5,
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
            percent_vehicle: 0.275,
            percent_bot: 0.275,
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
            personality_tags: [
              "PreventsWaste",
              "Meta",
              "NoPercentage",
              "PenchantT2Air",
              "PenchantT1Bot",
              "PenchantT1Vehicle",
              "PenchantT2Vehicle",
              "PenchantT1Naval",
              "PenchantT2Naval",
            ],
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
            percent_vehicle: 0.025,
            percent_bot: 0.025,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0.95,
          },
          aipPlatoon: {
            display_name: "!LOC:AIP Raider" + " (MLA)",
            personality_tags: ["PreventsWaste", "Platoon", "PenchantPlatoon"],
          },
          aipRaiderMla: {
            display_name: "!LOC:AIP Raider" + " (MLA)",
            personality_tags: [
              "PreventsWaste",
              "Raider",
              "PenchantT2Air",
              "PenchantT1Bot",
              "PenchantT2Bot",
              "PenchantT1Vehicle",
              "PenchantT1Naval",
              "PenchantT2Naval",
            ],
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
            percent_vehicle: 0.075,
            percent_bot: 0.075,
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
            personality_tags: [
              "PreventsWaste",
              "Sniper",
              "NoPercentage",
              "PenchantT2Air",
              "PenchantT1Bot",
              "PenchantT2Bot",
              "PenchantT1Vehicle",
              "PenchantT2Vehicle",
              "PenchantT1Naval",
              "PenchantT2Naval",
            ],
          },
          aipSwarm: {
            display_name: "!LOC:AIP Swarm",
            basic_to_advanced_factory_ratio: 10,
            fabber_to_factory_ratio_advanced: 3,
          },
          aipSynchronous: {
            display_name: "!LOC:AIP Synchronous",
            fabber_to_factory_ratio_basic: 1.5,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            percent_vehicle: 0.15,
            percent_bot: 0.15,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.75,
            energy_drain_check: 0.85,
            metal_demand_check: 0.75,
            energy_demand_check: 0.85,
          },
          aipTacticalMla: {
            display_name: "!LOC:AIP Tactical (MLA)",
            percent_vehicle: 0.25,
            percent_bot: 0.45,
            personality_tags: [
              "PreventsWaste",
              "Tactical",
              "NoPercentage",
              "PenchantT2Defence",
              "PenchantT2Air",
              "PenchantT2Bot",
              "PenchantT2Naval",
            ],
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
          var isMLA = function (slot) {
            var mlaCommanders = [
              "/pa/units/commanders/imperial_",
              "/pa/units/commanders/quad_",
              "/pa/units/commanders/raptor_",
              "/pa/units/commanders/tank_",
            ];
            return _.some(mlaCommanders, function (commander) {
              return _.startsWith(slot.commander(), commander);
            });
          };

          var validPersonalities = function (personalityNames) {
            return _.filter(personalityNames, function (name) {
              return !_.startsWith(name, "aipRandom");
            });
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
            if (isMLA(slot)) {
              return validPersonalities(aipPersonalityNames);
            }
            return validPersonalities(noMlaPersonalities);
          };

          _.forEach(model.armies(), function (army) {
            _.forEach(army.slots(), function (slot) {
              if (slot.ai() === true && slot.aiPersonality() === "aipRandom") {
                var availablePersonalities = filterValidPersonalities(slot);
                var chosenPersonality = _.sample(availablePersonalities);
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
