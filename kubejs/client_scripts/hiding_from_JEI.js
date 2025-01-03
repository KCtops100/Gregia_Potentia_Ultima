JEIEvents.hideItems((event) => {
    const itemsToHide = [
        'refinedstorage:silicon',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:processor_binding',
        'refinedstorage:machine_casing',
        'refinedstorage:quartz_enriched_iron',
        'refinedstorage:quartz_enriched_iron_block',
        'refinedstorage:creative_controller',
        'refinedstorage:white_controller',
        'refinedstorage:white_creative_controller',
        'refinedstorage:white_grid',
        'refinedstorage:white_crafting_grid',
        'refinedstorage:white_pattern_grid',
        'refinedstorage:white_fluid_grid',
        'refinedstorage:white_network_receiver',
        'refinedstorage:white_network_transmitter',
        'refinedstorage:white_relay',
        'refinedstorage:white_detector',
        'refinedstorage:white_security_manager',
        'refinedstorage:white_wireless_transmitter',
        'refinedstorage:white_disk_manipulator',
        'refinedstorage:white_crafter',
        'refinedstorage:white_crafter_manager',
        'refinedstorage:white_crafting_monitor',
        'refinedstorage:orange_controller',
        'refinedstorage:orange_creative_controller',
        'refinedstorage:orange_grid',
        'refinedstorage:orange_crafting_grid',
        'refinedstorage:orange_pattern_grid',
        'refinedstorage:orange_fluid_grid',
        'refinedstorage:orange_network_receiver',
        'refinedstorage:orange_network_transmitter',
        'refinedstorage:orange_relay',
        'refinedstorage:orange_detector',
        'refinedstorage:orange_security_manager',
        'refinedstorage:orange_wireless_transmitter',
        'refinedstorage:orange_disk_manipulator',
        'refinedstorage:orange_crafter',
        'refinedstorage:orange_crafter_manager',
        'refinedstorage:orange_crafting_monitor',
        'refinedstorage:magenta_controller',
        'refinedstorage:magenta_creative_controller',
        'refinedstorage:magenta_grid',
        'refinedstorage:magenta_crafting_grid',
        'refinedstorage:magenta_pattern_grid',
        'refinedstorage:magenta_fluid_grid',
        'refinedstorage:magenta_network_receiver',
        'refinedstorage:magenta_network_transmitter',
        'refinedstorage:magenta_relay',
        'refinedstorage:magenta_detector',
        'refinedstorage:magenta_security_manager',
        'refinedstorage:magenta_wireless_transmitter',
        'refinedstorage:magenta_disk_manipulator',
        'refinedstorage:magenta_crafter',
        'refinedstorage:magenta_crafter_manager',
        'refinedstorage:magenta_crafting_monitor',
        'refinedstorage:yellow_controller',
        'refinedstorage:yellow_creative_controller',
        'refinedstorage:yellow_grid',
        'refinedstorage:yellow_crafting_grid',
        'refinedstorage:yellow_pattern_grid',
        'refinedstorage:yellow_fluid_grid',
        'refinedstorage:yellow_network_receiver',
        'refinedstorage:yellow_network_transmitter',
        'refinedstorage:yellow_relay',
        'refinedstorage:yellow_detector',
        'refinedstorage:yellow_security_manager',
        'refinedstorage:yellow_wireless_transmitter',
        'refinedstorage:yellow_disk_manipulator',
        'refinedstorage:yellow_crafter',
        'refinedstorage:yellow_crafter_manager',
        'refinedstorage:yellow_crafting_monitor',
        'refinedstorage:lime_controller',
        'refinedstorage:lime_creative_controller',
        'refinedstorage:lime_grid',
        'refinedstorage:lime_crafting_grid',
        'refinedstorage:lime_pattern_grid',
        'refinedstorage:lime_fluid_grid',
        'refinedstorage:lime_network_receiver',
        'refinedstorage:lime_network_transmitter',
        'refinedstorage:lime_relay',
        'refinedstorage:lime_detector',
        'refinedstorage:lime_security_manager',
        'refinedstorage:lime_wireless_transmitter',
        'refinedstorage:lime_disk_manipulator',
        'refinedstorage:lime_crafter',
        'refinedstorage:lime_crafter_manager',
        'refinedstorage:lime_crafting_monitor',
        'refinedstorage:pink_controller',
        'refinedstorage:pink_creative_controller',
        'refinedstorage:pink_grid',
        'refinedstorage:pink_crafting_grid',
        'refinedstorage:pink_pattern_grid',
        'refinedstorage:pink_fluid_grid',
        'refinedstorage:pink_network_receiver',
        'refinedstorage:pink_network_transmitter',
        'refinedstorage:pink_relay',
        'refinedstorage:pink_detector',
        'refinedstorage:pink_security_manager',
        'refinedstorage:pink_wireless_transmitter',
        'refinedstorage:pink_disk_manipulator',
        'refinedstorage:pink_crafter',
        'refinedstorage:pink_crafter_manager',
        'refinedstorage:pink_crafting_monitor',
        'refinedstorage:gray_controller',
        'refinedstorage:gray_creative_controller',
        'refinedstorage:gray_grid',
        'refinedstorage:gray_crafting_grid',
        'refinedstorage:gray_pattern_grid',
        'refinedstorage:gray_fluid_grid',
        'refinedstorage:gray_network_receiver',
        'refinedstorage:gray_network_transmitter',
        'refinedstorage:gray_relay',
        'refinedstorage:gray_detector',
        'refinedstorage:gray_security_manager',
        'refinedstorage:gray_wireless_transmitter',
        'refinedstorage:gray_disk_manipulator',
        'refinedstorage:gray_crafter',
        'refinedstorage:gray_crafter_manager',
        'refinedstorage:gray_crafting_monitor',
        'refinedstorage:light_gray_controller',
        'refinedstorage:light_gray_creative_controller',
        'refinedstorage:light_gray_grid',
        'refinedstorage:light_gray_crafting_grid',
        'refinedstorage:light_gray_pattern_grid',
        'refinedstorage:light_gray_fluid_grid',
        'refinedstorage:light_gray_network_receiver',
        'refinedstorage:light_gray_network_transmitter',
        'refinedstorage:light_gray_relay',
        'refinedstorage:light_gray_detector',
        'refinedstorage:light_gray_security_manager',
        'refinedstorage:light_gray_wireless_transmitter',
        'refinedstorage:light_gray_disk_manipulator',
        'refinedstorage:light_gray_crafter',
        'refinedstorage:light_gray_crafter_manager',
        'refinedstorage:light_gray_crafting_monitor',
        'refinedstorage:cyan_controller',
        'refinedstorage:cyan_creative_controller',
        'refinedstorage:cyan_grid',
        'refinedstorage:cyan_crafting_grid',
        'refinedstorage:cyan_pattern_grid',
        'refinedstorage:cyan_fluid_grid',
        'refinedstorage:cyan_network_receiver',
        'refinedstorage:cyan_network_transmitter',
        'refinedstorage:cyan_relay',
        'refinedstorage:cyan_detector',
        'refinedstorage:cyan_security_manager',
        'refinedstorage:cyan_wireless_transmitter',
        'refinedstorage:cyan_disk_manipulator',
        'refinedstorage:cyan_crafter',
        'refinedstorage:cyan_crafter_manager',
        'refinedstorage:cyan_crafting_monitor',
        'refinedstorage:purple_controller',
        'refinedstorage:purple_creative_controller',
        'refinedstorage:purple_grid',
        'refinedstorage:purple_crafting_grid',
        'refinedstorage:purple_pattern_grid',
        'refinedstorage:purple_fluid_grid',
        'refinedstorage:purple_network_receiver',
        'refinedstorage:purple_network_transmitter',
        'refinedstorage:purple_relay',
        'refinedstorage:purple_detector',
        'refinedstorage:purple_security_manager',
        'refinedstorage:purple_wireless_transmitter',
        'refinedstorage:purple_disk_manipulator',
        'refinedstorage:purple_crafter',
        'refinedstorage:purple_crafter_manager',
        'refinedstorage:purple_crafting_monitor',
        'refinedstorage:blue_controller',
        'refinedstorage:blue_creative_controller',
        'refinedstorage:blue_grid',
        'refinedstorage:blue_crafting_grid',
        'refinedstorage:blue_pattern_grid',
        'refinedstorage:blue_fluid_grid',
        'refinedstorage:blue_network_receiver',
        'refinedstorage:blue_network_transmitter',
        'refinedstorage:blue_relay',
        'refinedstorage:blue_detector',
        'refinedstorage:blue_security_manager',
        'refinedstorage:blue_wireless_transmitter',
        'refinedstorage:blue_disk_manipulator',
        'refinedstorage:blue_crafter',
        'refinedstorage:blue_crafter_manager',
        'refinedstorage:blue_crafting_monitor',
        'refinedstorage:brown_controller',
        'refinedstorage:brown_creative_controller',
        'refinedstorage:brown_grid',
        'refinedstorage:brown_crafting_grid',
        'refinedstorage:brown_pattern_grid',
        'refinedstorage:brown_fluid_grid',
        'refinedstorage:brown_network_receiver',
        'refinedstorage:brown_network_transmitter',
        'refinedstorage:brown_relay',
        'refinedstorage:brown_detector',
        'refinedstorage:brown_security_manager',
        'refinedstorage:brown_wireless_transmitter',
        'refinedstorage:brown_disk_manipulator',
        'refinedstorage:brown_crafter',
        'refinedstorage:brown_crafter_manager',
        'refinedstorage:brown_crafting_monitor',
        'refinedstorage:green_controller',
        'refinedstorage:green_creative_controller',
        'refinedstorage:green_grid',
        'refinedstorage:green_crafting_grid',
        'refinedstorage:green_pattern_grid',
        'refinedstorage:green_fluid_grid',
        'refinedstorage:green_network_receiver',
        'refinedstorage:green_network_transmitter',
        'refinedstorage:green_relay',
        'refinedstorage:green_detector',
        'refinedstorage:green_security_manager',
        'refinedstorage:green_wireless_transmitter',
        'refinedstorage:green_disk_manipulator',
        'refinedstorage:green_crafter',
        'refinedstorage:green_crafter_manager',
        'refinedstorage:green_crafting_monitor',
        'refinedstorage:red_controller',
        'refinedstorage:red_creative_controller',
        'refinedstorage:red_grid',
        'refinedstorage:red_crafting_grid',
        'refinedstorage:red_pattern_grid',
        'refinedstorage:red_fluid_grid',
        'refinedstorage:red_network_receiver',
        'refinedstorage:red_network_transmitter',
        'refinedstorage:red_relay',
        'refinedstorage:red_detector',
        'refinedstorage:red_security_manager',
        'refinedstorage:red_wireless_transmitter',
        'refinedstorage:red_disk_manipulator',
        'refinedstorage:red_crafter',
        'refinedstorage:red_crafter_manager',
        'refinedstorage:red_crafting_monitor',
        'refinedstorage:black_controller',
        'refinedstorage:black_creative_controller',
        'refinedstorage:black_grid',
        'refinedstorage:black_crafting_grid',
        'refinedstorage:black_pattern_grid',
        'refinedstorage:black_fluid_grid',
        'refinedstorage:black_network_receiver',
        'refinedstorage:black_network_transmitter',
        'refinedstorage:black_relay',
        'refinedstorage:black_detector',
        'refinedstorage:black_security_manager',
        'refinedstorage:black_wireless_transmitter',
        'refinedstorage:black_disk_manipulator',
        'refinedstorage:black_crafter',
        'refinedstorage:black_crafter_manager',
        'refinedstorage:black_crafting_monitor',
        'refinedstorage:creative_storage_disk',
        'refinedstorage:creative_fluid_storage_disk',
        'refinedstorage:portable_grid',
        'refinedstorage:creative_portable_grid',
        'refinedstorage:1k_storage_block',
        'refinedstorage:4k_storage_block',
        'refinedstorage:16k_storage_block',
        'refinedstorage:64k_storage_block',
        'refinedstorage:creative_storage_block',
        'refinedstorage:64k_fluid_storage_block',
        'refinedstorage:256k_fluid_storage_block',
        'refinedstorage:1024k_fluid_storage_block',
        'refinedstorage:4096k_fluid_storage_block',
        'refinedstorage:creative_fluid_storage_block',
        'refinedstorage:creative_wireless_crafting_monitor',
        'refinedstorage:creative_wireless_fluid_grid',
        'refinedstorage:creative_wireless_grid',
        'refinedstorageaddons:creative_wireless_crafting_grid',
        'extrastorage:block_256k',
        'extrastorage:block_1024k',
        'extrastorage:block_4096k',
        'extrastorage:block_16384k',
        'extrastorage:block_16384k_fluid',
        'extrastorage:block_65536k_fluid',
        'extrastorage:block_262144k_fluid',
        'extrastorage:block_1048576k_fluid',
        'extrastorage:advanced_importer',
        'extrastorage:advanced_exporter',
        'extrastorage:raw_neural_processor',
        'extrastorage:neural_processor'
    ];

    itemsToHide.forEach((item) => {
        event.hide(item);
    });
});
