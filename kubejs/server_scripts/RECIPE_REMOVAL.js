JEIEvents.hideItems((event) => {
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
    ];

    itemsToHide.forEach((item) => {
        event.remove({ output: item })
    });
});
