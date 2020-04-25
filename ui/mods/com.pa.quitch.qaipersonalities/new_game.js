var qaipersonalitiesLoaded;

function qaipersonalities() {
  if (qaipersonalitiesLoaded) {
    return;
  }

  qaipersonalitiesLoaded = true;

  api.debug.log("Adding Quitch AI Personalities");

  var aiPersonalities = model.aiPersonalities();

  var newPersonalities = {
    "AIP-Absurd Aggressive": {
      display_name: "!LOC:Absurd Aggressive",
      neural_data_mod: 1.33,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Air": {
      display_name: "!LOC:Absurd Air",
      percent_vehicle: 0,
      percent_bot: 0,
      percent_air: 1,
      percent_naval: 0,
      percent_orbital: 0,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Bot": {
      display_name: "!LOC:Absurd Bot",
      percent_vehicle: 0,
      percent_bot: 0.95,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Cautious": {
      display_name: "!LOC:Absurd Cautious",
      neural_data_mod: 0.75,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Fast Tech": {
      display_name: "!LOC:Absurd Fast Tech",
      adv_eco_mod: 0,
      adv_eco_mod_alone: 0,
      min_basic_fabbers: 4,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Galactic War": {
      display_name: "!LOC:Absurd Galactic War",
      fabber_to_factory_ratio_basic: 1.5,
      fabber_to_factory_ratio_advanced: 1.0,
      min_basic_fabbers: 1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 50,
      personality_tags: ["Vanilla", "PreventsWaste"],
      metalDrainCheck: 0.45,
      metalDemandCheck: 0.562,
      energyDrainCheck: 0.62,
      energyDemandCheck: 0.712,
    },
    "AIP-Absurd Land": {
      display_name: "!LOC:Absurd Land",
      percent_vehicle: 0.6,
      percent_bot: 0.4,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Low Tech": {
      display_name: "!LOC:Absurd Low Tech",
      adv_eco_mod: 3,
      adv_eco_mod_alone: 2,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Naval": {
      display_name: "!LOC:Absurd Naval",
      percent_open_vehicle: 0,
      percent_open_bot: 0,
      percent_open_air: 1,
      percent_open_naval: 0,
      percent_open_orbital: 0,
      percent_vehicle: 0,
      percent_bot: 0,
      percent_air: 0.2,
      percent_naval: 0.8,
      percent_orbital: 0,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Orbital": {
      display_name: "!LOC:Absurd Orbital",
      percent_vehicle: 0.1125,
      percent_bot: 0.0625,
      percent_air: 0.05,
      percent_naval: 0,
      percent_orbital: 0.775,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Rush": {
      display_name: "!LOC:Absurd Rush",
      percent_bot: 1,
      percent_vehicle: 0,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0,
      neural_data_mod: 1.33,
      adv_eco_mod: 3,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Tank": {
      display_name: "!LOC:Absurd Tank",
      percent_vehicle: 0.95,
      percent_bot: 0,
      percent_air: 0,
      percent_naval: 0,
      percent_orbital: 0.05,
      personality_tags: ["Vanilla", "PreventsWaste"],
    },
    "AIP-Absurd Turtle": {
      display_name: "!LOC:Absurd Turtle",
      metal_demand_check: 0.54,
      energy_demand_check: 0.65,
      neural_data_mod: 0.25,
      adv_eco_mod: 0,
      adv_eco_mod_alone: 0,
      fabber_to_factory_ratio_basic: 5,
      fabber_to_factory_ratio_advanced: 5,
      fabber_alone_on_planet_mod: 3,
      min_basic_fabbers: 5,
      max_basic_fabbers: 60,
      max_advanced_fabbers: 60,
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
