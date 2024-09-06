ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:diamond_crafter' })
    event.recipes.gtceu.assembler('extrastorage:diamond_crafter1')
        .itemInputs(
            '2x refinedstorage:refined_neural_processor',
            '7x refinedstorage:crafter',
            'gtceu:iv_machine_hull',
            '#gtceu:circuits/iv',
            '4x gtceu:tungstensteel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'extrastorage:diamond_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('extrastorage:diamond_crafter2')
        .itemInputs(
            '2x refinedstorage:refined_neural_processor',
            '7x refinedstorage:crafter',
            'gtceu:iv_machine_hull',
            '#gtceu:circuits/iv',
            '4x gtceu:tungstensteel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'extrastorage:diamond_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
})