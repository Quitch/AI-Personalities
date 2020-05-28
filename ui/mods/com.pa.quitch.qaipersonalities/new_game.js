var qaipersonalitiesLoaded;

function qaipersonalities() {
  if (qaipersonalitiesLoaded) {
    return;
  }

  qaipersonalitiesLoaded = true;

  api.debug.log("Adding AI Personalities for Skirmish and Multiplayer");

  var aiPersonalities = model.aiPersonalities();

  var newPersonalities = {
    "AIP-Aggressive": {
      display_name: "!LOC:AIP-Aggressive",
      neural_data_mod: 1.33,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Air": {
      display_name: "!LOC:AIP-Air",
      percent_vehicle: 0,
      percent_bot: 0,
      percent_air: 0.95,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Bot": {
      display_name: "!LOC:AIP-Bot",
      percent_vehicle: 0,
      percent_bot: 0.95,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Cautious": {
      display_name: "!LOC:AIP-Cautious",
      neural_data_mod: 0.75,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Defender": {
      display_name: "!LOC:AIP-Defender",
      metal_drain_check: 0.71,
      energy_drain_check: 0.8,
      metal_demand_check: 0.54,
      energy_demand_check: 0.65,
      adv_eco_mod: 1,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Economist": {
      display_name: "!LOC:AIP-Economist",
      metal_drain_check: 0.71,
      energy_drain_check: 0.8,
      adv_eco_mod: 1,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Fast Tech": {
      display_name: "!LOC:AIP-Fast Tech",
      adv_eco_mod: 0.5,
      adv_eco_mod_alone: 0,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Foundation": {
      display_name: "!LOC:AIP-Foundation",
      fabber_to_factory_ratio_basic: 1.5,
      min_basic_fabbers: 1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 50,
      personality_tags: ["Vanilla", "PreventsWaste"],
      percent_land: 0.05,
      percent_orbital: 0.05,
      percent_air: 0.55,
      percent_naval: 0.35,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85,
    },
    "AIP-Land": {
      display_name: "!LOC:AIP-Land",
      percent_vehicle: 0.55,
      percent_bot: 0.4,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Legonis Machina": {
      display_name: "!LOC:AIP-Legonis Machina",
      fabber_to_factory_ratio_basic: 1.5,
      min_basic_fabbers: 1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 50,
      personality_tags: ["Vanilla", "PreventsWaste"],
      percent_land: 0.55,
      percent_air: 0.35,
      percent_naval: 0.05,
      percent_orbital: 0.05,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85,
    },
    "AIP-Low Tech": {
      display_name: "!LOC:AIP-Low Tech",
      adv_eco_mod: 3,
      adv_eco_mod_alone: 2,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Naval": {
      display_name: "!LOC:AIP-Naval",
      percent_open_vehicle: 0,
      percent_open_bot: 0,
      percent_open_air: 1,
      percent_open_naval: 0,
      percent_open_orbital: 0,
      percent_vehicle: 0,
      percent_bot: 0,
      percent_air: 0.2,
      percent_naval: 0.75,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Orbital": {
      display_name: "!LOC:AIP-Orbital",
      percent_vehicle: 0.1125,
      percent_bot: 0.0625,
      percent_air: 0.05,
      percent_naval: 0,
      percent_orbital: 0.775,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Revenants": {
      display_name: "!LOC:AIP-Revenants",
      fabber_to_factory_ratio_basic: 1.5,
      min_basic_fabbers: 1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 50,
      personality_tags: ["Vanilla", "PreventsWaste"],
      percent_land: 0.15,
      percent_air: 0.15,
      percent_naval: 0.1,
      percent_orbital: 0.6,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85,
    },
    "AIP-Rush": {
      display_name: "!LOC:AIP-Rush",
      percent_bot: 0.95,
      percent_vehicle: 0,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      neural_data_mod: 1.33,
      adv_eco_mod: 3,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Swarm": {
      display_name: "!LOC:AIP-Swarm",
      metal_demand_check: 0.99,
      energy_demand_check: 0.99,
      min_advanced_fabbers: 1,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Synchronous": {
      display_name: "!LOC:AIP-Synchronous",
      fabber_to_factory_ratio_basic: 1.5,
      min_basic_fabbers: 1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 50,
      personality_tags: ["Vanilla", "PreventsWaste"],
      percent_land: 0.3,
      percent_air: 0.3,
      percent_naval: 0.05,
      percent_orbital: 0.35,
      metal_drain_check: 0.75,
      energy_drain_check: 0.85,
      metal_demand_check: 0.75,
      energy_demand_check: 0.85,
    },
    "AIP-Tank": {
      display_name: "!LOC:AIP-Tank",
      percent_vehicle: 0.95,
      percent_bot: 0,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Turtle": {
      display_name: "!LOC:AIP-Turtle",
      metal_drain_check: 0.71,
      energy_drain_check: 0.8,
      metal_demand_check: 0.54,
      energy_demand_check: 0.65,
      neural_data_mod: 0.25,
      adv_eco_mod: 0.5,
      adv_eco_mod_alone: 0,
      fabber_to_factory_ratio_basic: 3,
      fabber_to_factory_ratio_advanced: 3,
      fabber_alone_on_planet_mod: 2,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
  };

  var baseline = aiPersonalities.Absurd;

  newPersonalities = _.mapValues(newPersonalities, function (
    personality,
    name
  ) {
    var result = _.extend(_.clone(baseline), personality);
    result["name"] = name;
    return result;
  });

  _.extend(aiPersonalities, newPersonalities);

  model.aiPersonalities.valueHasMutated();
}

try {
  qaipersonalities();
} catch (e) {
  console.error(e);
}
