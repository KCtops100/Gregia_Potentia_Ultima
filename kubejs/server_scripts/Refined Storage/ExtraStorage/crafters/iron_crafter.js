ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:iron_crafter' })
    event.recipes.gtceu.assembler('extrastorage:iron_crafter1')
        .itemInputs(
            '2x refinedstorage:refined_neural_processor',
            '3x refinedstorage:crafter',
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '4x gtceu:stainless_steel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'extrastorage:iron_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('extrastorage:iron_crafter2')
        .itemInputs(
            '2x refinedstorage:refined_neural_processor',
            '3x refinedstorage:crafter',
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            '4x gtceu:stainless_steel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'extrastorage:iron_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
})