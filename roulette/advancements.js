const advancements = {
    "mine_stone": {
        "name": "Stone Age",
        "requirements": []
    },
    "upgrade_tools": {
        "name": "Getting an Upgrade",
        "requirements": ["mine_stone"]
    },
    "smelt_iron": {
        "name": "Acquire Hardware",
        "requirements": []
    },
    "obtain_armor": {
        "name": "Suit Up",
        "requirements": []
    },
    "lava_bucket": {
        "name": "Hot Stuff",
        "requirements": []
    },
    "iron_tools": {
        "name": "Isn't it Iron Pick",
        "requirements": []
    },
    "deflect_arrow": {
        "name": "Not Today, Thank You",
        "requirements": []
    },
    "form_obsidian": {
        "name": "Ice Bucket Challenge",
        "requirements": []
    },
    "mine_diamond": {
        "name": "Diamonds!",
        "requirements": []
    },
    "enter_the_nether": {
        "name": "We Need to Go Deeper",
        "requirements": [ [ "lava_bucket", "form_obsidian" ] ]
    },
    "shiny_gear": {
        "name": "Cover Me with Diamonds",
        "requirements": [ [ "mine_diamond", "trade" ] ]
    },
    "enchant_item": {
        "name": "Enchanter",
        "requirements": [ "mine_diamond", "form_obsidian" ]
    },
    "cure_zombie_villager": {
        "name": "Zombie Doctor",
        "requirements": []
    },
    "follow_ender_eye": {
        "name": "Eye Spy",
        "requirements": [ "kill_a_mob", "obtain_blaze_rod" ]
    },
    "enter_the_end": {
        "name": "The End?",
        "requirements": [ "follow_ender_eye" ]
    },

    "return_to_sender": {
        "name": "Return to Sender",
        "requirements": [ "enter_the_nether", "kill_a_mob" ]
    },
    "find_bastion": {
        "name": "Those Were the Days",
        "requirements": [ "enter_the_nether" ]
    },
    "obtain_ancient_debris": {
        "name": "Hidden in the Depths",
        "requirements": [ "enter_the_nether", [ "mine_diamond", "trade" ] ]
    },
    "fast_travel": {
        "name": "Subspace Bubble",
        "requirements": [ "enter_the_nether" ]
    },
    "find_fortress": {
        "name": "A Terrible Fortress",
        "requirements": [ "enter_the_nether" ]
    },
    "obtain_crying_obsidian": {
        "name": "Who is Cutting Onions?",
        "requirements": [ "enter_the_nether", [ "distract_piglin", "find_bastion" ] ]
    },
    "distract_piglin": {
        "name": "Oh Shiny",
        "requirements": [ "enter_the_nether" ]
    },
    "ride_strider": {
        "name": "This Boat Has Legs",
        "requirements": [ "enter_the_nether" ]
    },
    "uneasy_alliance": {
        "name": "Uneasy Alliance",
        "requirements": [ "enter_the_nether" ]
    },
    "loot_bastion": {
        "name": "War Pigs",
        "requirements": [ "find_bastion" ]
    },
    "use_lodestone": {
        "name": "Country Lode, Take Me Home",
        "requirements": [ [ "obtain_ancient_debris", "find_bastion" ] ]
    },
    "netherite_armor": {
        "name": "Cover Me in Debris",
        "requirements": [ "shiny_gear", [ "obtain_ancient_debris", "find_bastion" ] ]
    },
    "get_wither_skull": {
        "name": "Spooky Scary Skeleton",
        "requirements": [ "find_fortress", "kill_a_mob" ]
    },
    "obtain_blaze_rod": {
        "name": "Into Fire",
        "requirements": [ "find_fortress", "kill_a_mob" ]
    },
    "charge_respawn_anchor": {
        "name": "Not Quite \"Nine\" Lives",
        "requirements": [ "obtain_crying_obsidian", [ "trade", "enter_the_nether" ] ]
    },
    "ride_strider_in_overworld_lava": {
        "name": "Feels Like Home",
        "requirements": [ "ride_strider" ]
    },
    "explore_nether": {
        "name": "Hot Tourist Destinations",
        "requirements": [ "enter_the_nether" ]
    },
    "summon_wither": {
        "name": "Withering Heights",
        "requirements": [ "get_wither_skull" ]
    },
    "brew_potion": {
        "name": "Local Brewery",
        "requirements": []
    },
    "create_beacon": {
        "name": "Bring Home the Beacon",
        "requirements": [ "summon_wither" ]
    },
    "all_potions": {
        "name": "A Furious Cocktail",
        "requirements": [ "brew_potion", "obtain_blaze_rod" ]
    },
    "create_full_beacon": {
        "name": "Beaconator",
        "requirements": [ "create_beacon" ]
    },
    "all_effects": {
        "name": "How Did We Get Here?",
        "requirements": [ "all_potions", "kill_dragon", "create_beacon" ]
    },

    "kill_dragon": {
        "name": "Free the End",
        "requirements": [ "enter_the_end" ]
    },
    "dragon_egg": {
        "name": "The Next Generation",
        "requirements": [ "kill_dragon" ]
    },
    "enter_end_gateway": {
        "name": "Remote Getaway",
        "requirements": [ "enter_the_end" ]
    },
    "respawn_dragon": {
        "name": "The End... Again...",
        "requirements": [ "kill_dragon" ]
    },
    "dragon_breath": {
        "name": "You Need a Mint",
        "requirements": [ "enter_the_end" ]
    },
    "find_end_city": {
        "name": "The City at the End of the Game",
        "requirements": [ "enter_the_end" ]
    },
    "elytra": {
        "name": "Sky's the Limit",
        "requirements": [ "find_end_city" ]
    },
    "levitate": {
        "name": "Great View From Up Here",
        "requirements": [ "find_end_city" ]
    },

    "voluntary_exile":{
        "name": "Voluntary Exile",
        "requirements": [ "kill_a_mob" ]
    },
    "spyglass_at_parrot": {
        "name": "Is It a Bird?",
        "requirements": []
    },
    "kill_a_mob": {
        "name": "Monster Hunter",
        "requirements": []
    },
    "trade": {
        "name": "What a Deal!",
        "requirements": []
    },
    "honey_block_slide": {
        "name": "Sticky Situation",
        "requirements": []
    },
    "ol_betsy": {
        "name": "Ol' Betsy",
        "requirements": []
    },
    "lightning_rod_with_villager_no_fire": {
        "name": "Surge Protector",
        "requirements": []
    },
    "fall_from_world_height": {
        "name": "Caves & Cliffs",
        "requirements": []
    },
    "sleep_in_bed": {
        "name": "Sweet Dreams",
        "requirements": []
    },
    "hero_of_the_village": {
        "name": "Hero of the Village",
        "requirements": [ "voluntary_exile" ]
    },
    "spyglass_at_ghast": {
        "name": "Is It a Balloon?",
        "requirements": [ "enter_the_nether" ]
    },
    "throw_trident": {
        "name": "A Throwaway Joke",
        "requirements": [ "kill_a_mob" ]
    },
    "shoot_arrow": {
        "name": "Take Aim",
        "requirements": []
    },
    "kill_all_mobs": {
        "name": "Monsters Hunted",
        "requirements": [ "kill_dragon", "summon_wither", "voluntary_exile" ]
    },
    "totem_of_undying": {
        "name": "Postmortal",
        "requirements": [ "kill_a_mob" ]
    },
    "summon_iron_golem": {
        "name": "Hired Help",
        "requirements": []
    },
    "trade_at_world_height": {
        "name": "Star Trader",
        "requirements": [ "trade" ]
    },
    "two_birds_one_arrow": {
        "name": "Two Birds, One Arrow",
        "requirements": [ "kill_a_mob", "ol_betsy" ]
    },
    "whos_the_pillager_now": {
        "name": "Who's the Pillager Now?",
        "requirements": [ "kill_a_mob", "ol_betsy"]
    },
    "arbalistic": {
        "name": "Arbalistic",
        "requirements": [ "ol_betsy", "shoot_arrow" ]
    },
    "adventuring_time": {
        "name": "Adventuring Time",
        "requirements": []
    },
    "play_jukebox_in_meadows": {
        "name": "Sound of Music",
        "requirements": [ "mine_diamond" ]
    },
    "walk_on_powder_snow_with_leather_boots": {
        "name": "Light as a Rabbit",
        "requirements": []
    },
    "spyglass_at_dragon": {
        "name": "Is It a Plane?",
        "requirements": [ "enter_the_end", "respawn_dragon" ]
    },
    "very_very_frightening": {
        "name": "Very Very Frightening",
        "requirements": [ "throw_trident" ]
    },
    "sniper_duel": {
        "name": "Sniper Duel",
        "requirements": [ "kill_a_mob", "shoot_arrow" ]
    },
    "bullseye": {
        "name": "Bullseye",
        "requirements": []
    },

    "safely_harvest_honey": {
        "name": "Bee Our Guest",
        "requirements": []
    },
    "breed_an_animal": {
        "name": "The Parrots and the Bats",
        "requirements": []
    },
    "ride_a_boat_with_a_goat": {
        "name": "Whatever Floats Your Goat!",
        "requirements": []
    },
    "tame_an_animal": {
        "name": "Best Friends Forever",
        "requirements": []
    },
    "make_a_sign_glow": {
        "name": "Glow and Behold!",
        "requirements": []
    },
    "fishy_business": {
        "name": "Fishy Business",
        "requirements": []
    },
    "silk_touch_nest": {
        "name": "Total Beelocation",
        "requirements": [ ["fishy_business", "trade", "enchant_item", "follow_ender_eye" ] ]
    },
    "plant_seed": {
        "name": "A Seedy Place",
        "requirements": []
    },
    "wax_on": {
        "name": "Wax On",
        "requirements": []
    },
    "bred_all_animals": {
        "name": "Two by Two",
        "requirements": [ "breed_an_animal", "enter_the_nether" ]
    },
    "complete_catalogue": {
        "name": "A Complete Catalogue",
        "requirements": [ "tame_an_animal" ]
    },
    "tactical_fishing": {
        "name": "Tactical Fishing",
        "requirements": []
    },
    "balanced_diet": {
        "name": "A Balanced Diet",
        "requirements": [ "enter_the_end" ]
    },
    "obtain_netherite_hoe": {
        "name": "Serious Dedication",
        "requirements": [ [ "obtain_ancient_debris", "find_bastion" ]  ]
    },
    "wax_off": {
        "name": "Wax Off",
        "requirements": [ "wax_on" ]
    },
    "axolotl_in_a_bucket": {
        "name": "The Cutest Predator",
        "requirements": []
    },
    "kill_axolotl_target": {
        "name": "The Healing Power of Friendship!",
        "requirements": [ "axolotl_in_a_bucket" ]
    },
    "froglights": {
        "name": "With Our Powers Combined!",
        "requirements": ["enter_the_nether", "tadpole_in_a_bucket"]
    },
    "leash_all_frog_variants": {
        "name": "When the Squad Hops into Town",
        "requirements": [ "tadpole_in_a_bucket" ]
    },
    "allay_deliver_cake_to_note_block": {
        "name": "Birthday Song",
        "requirements": [ "allay_deliver_item_to_player" ]
    },
    "tadpole_in_a_bucket": {
        "name": "Bukkit Bukkit",
        "requirements": [ "breed_an_animal" ]
    },
    "allay_deliver_item_to_player": {
        "name": "You've Got a Friend in Me",
        "requirements": []
    },
    "kill_mob_near_sculk_catalyst": {
        "name": "It Spreads",
        "requirements": []
    },
    "avoid_vibration": {
        "name": "Sneak 100",
        "requirements": []
    },
    
    //1.20 advancements
    "salvage_sherd": {
        "name": "Respecting the Remnants",
        "requirements": []
    },
    "obtain_sniffer_egg": {
        "name": "Smells Interesting",
        "requirements": []
    },
    "feed_snifflet": {
        "name": "Little Sniffs",
        "requirements": [ "obtain_sniffer_egg" ]
    },
    "plant_any_sniffer_seed": {
        "name": "Planting the Past",
        "requirements": [ "obtain_sniffer_egg", "plant_seed" ]
    },
    "trim_with_any_armor_pattern": {
        "name": "Crafting a New Look",
        "requirements": []
    },
    "trim_with_all_exclusive_armor_patterns": {
        "name": "Smithing with Style",
        "requirements": [ "find_end_city", "find_fortress", "find_bastion", "kill_a_mob" ]
    },
    "craft_decorated_pot_using_only_sherds": {
        "name": "Careful restoration",
        "requirements": [ "salvage_sherd" ]
    },
    "read_power_of_chiseled_bookshelf": {
        "name": "The Power of Books",
        "requirements": [ "enter_the_nether" ]
    },

    //1.20.5 advancements
    "brush_armadillo": {
        "name": "Isn't It Scute?",
        "requirements": []
    },
    "remove_wolf_armor": {
        "name": "Shear Brilliance",
        "requirements": [ "tame_an_animal", "brush_armadillo" ]
    },
    "repair_wolf_armor": {
        "name": "Good as New",
        "requirements": [ "tame_an_animal", "brush_armadillo" ]
    },
    "whole_pack": {
        "name": "The Whole Pack",
        "requirements": [ "tame_an_animal" ]
    }
}
