GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dark_steel')
        .ingot()
        .components('1x obsidian', '1x iron', '1x coal')
        .color(0x030103).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})