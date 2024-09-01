ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:security_card' })
    event.recipes.gtceu.assembler('refinedstorage:security_card1')
        .itemInputs(
            '3x gtceu:steel_plate',
            '3x gtceu:nether_quartz_plate',
            'kubejs:refined_advanced_processor',
            '2x refinedstorage:network_card'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:security_card'
        )
        .duration(20 * 5)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:security_card2')
        .itemInputs(
            '3x gtceu:steel_plate',
            '3x gtceu:nether_quartz_plate',
            'kubejs:refined_advanced_processor',
            '2x refinedstorage:network_card'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:security_card'
        )
        .duration(20 * 5)
        .EUt(32)
})