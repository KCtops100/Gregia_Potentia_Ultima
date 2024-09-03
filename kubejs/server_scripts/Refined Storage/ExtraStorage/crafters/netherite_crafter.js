ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:netherite_crafter' })
    event.recipes.gtceu.assembler('extrastorage:netherite_crafter1')
        .itemInputs(
            '2x kubejs:refined_neural_processor',
            '9x refinedstorage:crafter',
            'gtceu:luv_machine_hull',
            '#gtceu:circuits/luv',
            '4x gtceu:rhodium_plated_palladium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'extrastorage:netherite_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('extrastorage:netherite_crafter2')
        .itemInputs(
            '2x kubejs:refined_neural_processor',
            '9x refinedstorage:crafter',
            'gtceu:luv_machine_hull',
            '#gtceu:circuits/luv',
            '4x gtceu:rhodium_plated_palladium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'extrastorage:netherite_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
})