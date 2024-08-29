ServerEvents.recipes(event => {
    const itemsToHide = [
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
        'refinedstorage:destruction_core'
    ];

    itemsToHide.forEach((item) => {
        event.remove({ output: item })
    });

    const sizes = [1, 4, 16, 64];
    sizes.forEach((size) => {
        event.remove({
            input: '#forge:glass',
            output: `refinedstorage:${size}k_storage_disk`
        });
    });

    const sizes2 = [64, 256, 1024, 4096];
    sizes2.forEach((size) => {
        event.remove({
            input: '#forge:glass',
            output: `refinedstorage:${size}k_fluid_storage_part`
        });
    });

    const sizes3 = [256, 1024, 4096, 16384];
    sizes3.forEach((size) => {
        event.remove({
            input: '#forge:glass',
            output: `extrastorage:storagepart_${size}k`
        });
    });

    const sizes4 = [16384, 65536, 262144, 1048576];
    sizes4.forEach((size) => {
        event.remove({
            input: '#forge:glass',
            output: `extrastorage:storagepart_${size}k_fluid`
        });
    });
});
