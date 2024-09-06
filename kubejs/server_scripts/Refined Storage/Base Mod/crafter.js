ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafter' })
    event.recipes.gtceu.assembler('refinedstorage:crafter1')
        .itemInputs(
            '2x refinedstorage:refined_advanced_processor',
            'refinedstorage:refined_construction_core',
            'refinedstorage:refined_destruction_core',
            'gtceu:mv_machine_hull',
            '#gtceu:circuits/mv',
            '4x gtceu:aluminium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:crafter'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:crafter2')
        .itemInputs(
            '2x refinedstorage:refined_advanced_processor',
            'refinedstorage:refined_construction_core',
            'refinedstorage:refined_destruction_core',
            'gtceu:mv_machine_hull',
            '#gtceu:circuits/mv',
            '4x gtceu:aluminium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:crafter'
        )
        .duration(20 * 60)
        .EUt(32)
})