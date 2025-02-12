ItemEvents.tooltip(event => {
    const mappings = [
        {
            block: '#forge:ores/apatite',
            text1: 'Found rarely in the Overwold and frequently in the Twilight Forest',
            text2: 'You can find it in snowy biomes in both dimensions.'
        },
        {
            block: '#forge:ores/certus_quartz',
            text1: 'Found in the Twilight Forest and Nether',
            text2: 'You can get it early in the twilight dark forest biome.'
        },
        {
            block: '#forge:ores/galena',
            text1: 'Found exclusively in the Twilight Forest.',
            text2: 'You can find it in the twilight savannah biome.'
        },
        {
            block: '#forge:ores/lead',
            text1: 'Found in the Overworld and Twilight Forest.',
            text2: 'You can find it in the savannahs, deserts, and badlands.'
        },
        {
            block: '#forge:ores/pyrochlore',
            text1: 'Found rarely in the Overwold and frequently in the Twilight Forest',
            text2: 'You can find it in snowy biomes in both dimensions.'
        },
        {
            block: '#forge:ores/silver',
            text1: 'Found in the Twilight Forest.',
            text2: 'You can find it in the twilight savannah biome.'
        },
        {
            block: '#forge:ores/tricalcium_phosphate',
            text1: 'Found rarely in the Overwold and frequently in the Twilight Forest',
            text2: 'You can find it in snowy biomes in both dimensions.'
        }
    ];

    mappings.forEach(mapping => {
        event.addAdvanced(mapping.block, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
            } else {
                text.add(1, Text.green(mapping.text1))
                text.add(2, Text.green(mapping.text2))
            }
        });
    });
});