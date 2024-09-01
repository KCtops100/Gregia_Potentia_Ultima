ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafter' })
    event.recipes.gtceu.assembler('refinedstorage:crafter1')
        .itemInputs(
            '2x kubejs:refined_advanced_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate'
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
            '2x kubejs:refined_advanced_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate'
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