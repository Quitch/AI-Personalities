var qaipersonalitiesLoaded;

function qaipersonalities() {
    if (qaipersonalitiesLoaded) {
        return;
    }

    qaipersonalitiesLoaded = true;

    var newBuild = _.isFunction(model.aiPersonalities);

    var qaipersonalitiesAddAIPersonalitiesAdded = false;

    model.qaipersonalitiesAddAIPersonalitiesAdded = function () {

        if (qaipersonalitiesAddAIPersonalitiesAdded) {
            return;
        }

        api.debug.log('Adding AI Personalities');

        var aiPersonalities = newBuild ? model.aiPersonalities() : model.aiPersonalities;

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
                display_name: '!LOC:Absurd Balance',
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
            fabber_to_factory_ratio_advanced: 1.0,
            fabber_alone_on_planet_mod: 2.0,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 2,
            max_basic_fabbers: 6,
            min_advanced_fabbers: 3,
            max_advanced_fabbers: 20
        }

        newPersonalities = _.mapValues(newPersonalities, function (personality, name) {
            var result = _.extend(_.clone(baseline), personality);
            result['name'] = name;
            return result;
        });

        _.extend(aiPersonalities, newPersonalities);

        if (newBuild) {
            model.aiPersonalities.valueHasMutated();
        } else {
            model.aiPersonalityNames(_.keys(aiPersonalities));
        }
    }

    if (newBuild) {

        model.qaipersonalitiesServerModIsLoaded = ko.computed(function () {
            var result = _.intersection(model.gameModIdentifiers(), ['com.pa.quitch.qaipersonalities', 'com.pa.quitch.qaipersonalities-dev']).length > 0;

            if (result) {
                model.qaipersonalitiesAddAIPersonalitiesAdded();
            }

            return result;
        });
    }
    else {

        model.qaipersonalitiesServerModIsLoaded = ko.observable(false);

        model.qaipersonalitiesServerModCheckLoaded = function () {
            api.mods.getMountedMods('server', function (mods) {

                // check to see if server mod (and optionally a dev version) are loaded

                var loaded = _.intersection(_.pluck(mods, 'identifier'), ['com.pa.quitch.qaipersonalities', 'com.pa.quitch.qaipersonalities-dev']).length > 0;

                model.qaipersonalitiesServerModIsLoaded(loaded);
            });
        }

        // once mod data is sent check if server mod is actually loaded

        if (window.scene_server_mod_list && window.scene_server_mod_list.new_game) {
            model.qaipersonalitiesServerModCheckLoaded();
        }
        else {
            var server_mod_info_updated_handler = handlers.server_mod_info_updated;

            handlers.server_mod_info_updated = function (payload) {
                server_mod_info_updated_handler(payload);

                model.qaipersonalitiesServerModCheckLoaded();
            }
        }

        model.qaipersonalitiesServerModIsLoaded.subscribe(function (qaipersonalitiesServerModIsLoaded) {
            model.qaipersonalitiesAddAIPersonalitiesAdded();
        });


    }

    model.qaipersonalitiesServerModIsHost = ko.computed(function () {
        return model.isGameCreator() && model.qaipersonalitiesServerModIsLoaded();
    });
}

try {
    qaipersonalities();
}
catch (e) {
    console.error(e);
}