ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:gold_crafter' })
    event.recipes.gtceu.assembler('extrastorage:gold_crafter1')
        .itemInputs(
            '2x refinedstorage:neural_processor',
            '5x refinedstorage:crafter',
            'gtceu:ev_machine_hull',
            '#gtceu:circuits/ev',
            '4x gtceu:titanium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'extrastorage:gold_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('extrastorage:gold_crafter2')
        .itemInputs(
            '2x refinedstorage:neural_processor',
            '5x refinedstorage:crafter',
            'gtceu:ev_machine_hull',
            '#gtceu:circuits/ev',
            '4x gtceu:titanium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'extrastorage:gold_crafter'
        )
        .duration(20 * 60)
        .EUt(32)
})
