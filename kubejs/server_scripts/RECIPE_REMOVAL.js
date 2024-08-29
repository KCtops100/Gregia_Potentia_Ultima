ServerEvents.recipes(event => {
    const itemsToRemove = [
        'refinedstorage:silicon',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:processor_binding',
        'refinedstorage:basic_processor',
        'refinedstorage:improved_processor',
        'refinedstorage:advanced_processor',
        'refinedstorage:machine_casing',
        'refinedstorage:quartz_enriched_iron',
        'refinedstorage:quartz_enriched_iron_block',
        'refinedstorage:construction_core',
        'refinedstorage:destruction_core',
        'refinedstorage:portable_grid',
        'refinedstorage:1k_storage_block',
        'refinedstorage:4k_storage_block',
        'refinedstorage:16k_storage_block',
        'refinedstorage:64k_storage_block',
        'refinedstorage:creative_storage_block',
        'refinedstorage:64k_fluid_storage_block',
        'refinedstorage:256k_fluid_storage_block',
        'refinedstorage:1024k_fluid_storage_block',
        'refinedstorage:4096k_fluid_storage_block',
        'refinedstorage:creative_fluid_storage_block'
    ];

    itemsToRemove.forEach((item) => {
        event.remove({ output: item })
    });

    const itemsToRemove2 = [
        'refinedstorage:1k_storage_disk',
        'refinedstorage:4k_storage_disk',
        'refinedstorage:16k_storage_disk',
        'refinedstorage:64k_storage_disk',
        'refinedstorage:64k_fluid_storage_disk',
        'refinedstorage:256k_fluid_storage_disk',
        'refinedstorage:1024k_fluid_storage_disk',
        'refinedstorage:4096k_fluid_storage_disk',
        'extrastorage:disk_256k',
        'extrastorage:disk_1024k',
        'extrastorage:disk_4096k',
        'extrastorage:disk_16384k',
        'extrastorage:disk_16384k_fluid',
        'extrastorage:disk_65536k_fluid',
        'extrastorage:disk_262144k_fluid',
        'extrastorage:disk_1048576k_fluid'
    ];

    itemsToRemove2.forEach((item) => {
        event.remove({
            input: '#forge:glass',
            output: item
        });
    });
});
