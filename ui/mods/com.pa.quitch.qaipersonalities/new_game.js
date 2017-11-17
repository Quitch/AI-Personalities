var qaipersonalitiesLoaded;

function qaipersonalities() {
    if (qaipersonalitiesLoaded) {
        return;
    }

    qaipersonalitiesLoaded = true;

    api.debug.log('Adding Quitch AI Personalities');

    var aiPersonalities = model.aiPersonalities();

    var defaultAiPersonalities = ['Idle', 'Normal', 'Hard', 'Relentless', 'Absurd'];

    _.forEach(aiPersonalities, function (personality, name) {
        if (defaultAiPersonalities.indexOf(name) != -1) {
            personality.personality_tags = _.union(personality.personality_tags || [], ['Vanilla']);
        }
    });

    var newPersonalities = {
        'AIP-Absurd Land': {
            display_name: '!LOC:Absurd Land',
            percent_land: 1,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Tank': {
            display_name: '!LOC:Absurd Tank',
            percent_vehicle: 1,
            percent_bot: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Bot': {
            display_name: '!LOC:Absurd Bot',
            percent_vehicle: 0,
            percent_bot: 1,
            percent_naval: 0,
            percent_orbital: 0,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Air': {
            display_name: '!LOC:Absurd Air',
            percent_land: 0,
            percent_air: 1,
            percent_naval: 0,
            percent_orbital: 0,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Balanced': {
            display_name: '!LOC:Absurd Balanced',
            percent_land: 0.4,
            percent_air: 0.2,
            percent_naval: 0.2,
            percent_orbital: 0.2,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Naval': {
            display_name: '!LOC:Absurd Naval',
            percent_land: 0,
            percent_air: 0,
            percent_naval: 1,
            percent_orbital: 0,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Orbital': {
            display_name: '!LOC:Absurd Orbital',
            percent_land: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 1,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Low Tech': {
            display_name: '!LOC:Absurd Low Tech',
            adv_eco_mod: 3,
            adv_eco_mod_alone: 3,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Fast Tech': {
            display_name: '!LOC:Absurd Fast Tech',
            adv_eco_mod: 0,
            adv_eco_mod_alone: 0,
            min_basic_fabbers: 4,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Cautious': {
            display_name: '!LOC:Absurd Cautious',
            neural_data_mod: 0.5,
            min_basic_fabbers: 4,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Aggressive': {
            display_name: '!LOC:Absurd Aggressive',
            neural_data_mod: 2,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Rush': {
            display_name: '!LOC:Absurd Rush',
            percent_bot: 1,
            percent_vehicle: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
            neural_data_mod: 2,
            adv_eco_mod: 3,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Turtle': {
            display_name: '!LOC:Absurd Turtle',
            neural_data_mod: 0.25,
            adv_eco_mod: 0,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 5,
            fabber_to_factory_ratio_advanced: 5,
            fabber_alone_on_planet_mod: 3,
            min_basic_fabbers: 4,
            max_basic_fabbers: 60,
            max_advanced_fabbers: 60,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Slow Expansion': {
            display_name: '!LOC:Absurd Slow Expansion',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste",
                "SlowerExpansion"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd No Retreat': {
            display_name: '!LOC:Absurd No Retreat',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: false,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Poor Scouting': {
            display_name: '!LOC:Absurd Poor Scouting',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: false,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Superweapons': {
            display_name: '!LOC:Absurd Superweapons',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 5,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0.05,
            factory_alone_on_planet_mod: 0.05,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Early Fabbers': {
            display_name: '!LOC:Absurd Early Fabbers',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 10,
            max_basic_fabbers: 10,
            min_advanced_fabbers: 5,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Early Troops': {
            display_name: '!LOC:Absurd Early Troops',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 0,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 0,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Few Fabbers': {
            display_name: '!LOC:Absurd Few Fabbers',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 6,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 20
        },
        'AIP-Absurd Fast Eco Low Tech': {
            display_name: '!LOC:Absurd Fast Eco Low Tech',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 0,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 10,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Fast Eco High Tech': {
            display_name: '!LOC:Absurd Fast Eco High Tech',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 0,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 0.05,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Mass Factories Alone': {
            display_name: '!LOC:Absurd Mass Factories Alone',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 1,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 3,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100
        },
        'AIP-Absurd Intermittent Builds': {
            display_name: '!LOC:Absurd Intermittent Builds',
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            personality_tags:
            [
                "PreventsWaste"
            ],
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            enable_commander_danger_responses: true,
            neural_data_mod: 1.0,
            adv_eco_mod: 1.3,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.0,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 3,
            max_basic_fabbers: 100,
            min_advanced_fabbers: 1,
            max_advanced_fabbers: 100,
            factory_build_delay_min: 0,
            factory_build_delay_max: 6,
        }
    }

    var baseline = aiPersonalities.Absurd || {
        display_name: '!LOC:Absurd',
        percent_vehicle: 0.45,
        percent_bot: 0.25,
        percent_air: 0.2,
        percent_naval: 0.05,
        percent_orbital: 0.05,
        personality_tags:
        [
            "PreventsWaste"
        ],
        metal_drain_check: 0.54,
        energy_drain_check: 0.65,
        metal_demand_check: 0.71,
        energy_demand_check: 0.8,
        micro_type: 2,
        go_for_the_kill: true,
        priority_scout_metal_spots: true,
        enable_commander_danger_responses: true,
        neural_data_mod: 1.0,
        adv_eco_mod: 1.3,
        adv_eco_mod_alone: 0.85,
        fabber_to_factory_ratio_basic: 1.0,
        fabber_to_factory_ratio_advanced: 2,
        fabber_alone_on_planet_mod: 3,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 0.5,
        min_basic_fabbers: 3,
        max_basic_fabbers: 100,
        min_advanced_fabbers: 1,
        max_advanced_fabbers: 100
    }

    newPersonalities = _.mapValues(newPersonalities, function (personality, name) {
        var result = _.extend(_.clone(baseline), personality);
        result['name'] = name;
        return result;
    });

    _.extend(aiPersonalities, newPersonalities);

    model.aiPersonalities.valueHasMutated();

}

try {
    qaipersonalities();
}
catch (e) {
    console.error(e);
}