ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:grid' })
    event.recipes.gtceu.assembler('refinedstorage:grid1')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x kubejs:refined_improved_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:grid'
        )
        .duration(20 * 30)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:grid2')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x kubejs:refined_improved_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:grid'
        )
        .duration(20 * 30)
        .EUt(32)
})