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
        'AIP-Absurd Aggressive': {
            display_name: '!LOC:Absurd Aggressive',
            neural_data_mod: 2,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        },
        'AIP-Absurd Air': {
            display_name: '!LOC:Absurd Air',
            percent_vehicle: 0,
            percent_bot: 0,
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
            percent_vehicle: 0.2,
            percent_bot: 0.2,
            percent_air: 0.2,
            percent_naval: 0.2,
            percent_orbital: 0.2,
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
        'AIP-Absurd Land': {
            display_name: '!LOC:Absurd Land',
            percent_vehicle: 0.5,
            percent_bot: 0.5,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0,
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
        'AIP-Absurd Naval': {
            display_name: '!LOC:Absurd Naval',
            percent_vehicle: 0,
            percent_bot: 0,
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
            percent_vehicle: 0,
            percent_bot: 0,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 1,
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
        'AIP-Absurd Galactic War': {
            display_name: '!LOC:Absurd Galactic War',
            fabber_to_factory_ratio_basic: 1.5,
            fabber_to_factory_ratio_advanced: 1.0,
            min_basic_fabbers: 1,
            max_basic_fabbers: 15,
            max_advanced_fabbers: 50,
            personality_tags:
            [
                "vanilla",
                "PreventsWaste"
            ]
        }
    }

    var baseline = aiPersonalities.Absurd

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