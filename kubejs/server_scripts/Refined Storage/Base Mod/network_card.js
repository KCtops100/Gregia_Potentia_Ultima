ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:network_card' })
    event.recipes.gtceu.assembler('refinedstorage:network_card1')
        .itemInputs(
            'refinedstorage:refined_advanced_processor',
            '3x gtceu:steel_plate',
            '3x gtceu:nether_quartz_plate',
            '2x minecraft:paper'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:network_card'
        )
        .duration(20 * 10)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:network_card2')
        .itemInputs(
            'refinedstorage:refined_advanced_processor',
            '3x gtceu:steel_plate',
            '3x gtceu:nether_quartz_plate',
            '2x minecraft:paper'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:network_card'
        )
        .duration(20 * 10)
        .EUt(32)
})