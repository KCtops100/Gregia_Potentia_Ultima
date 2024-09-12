ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:pattern_grid' })
    event.recipes.gtceu.assembler('refinedstorage:pattern_grid1')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x refinedstorage:improved_processor',
            'refinedstorage:advanced_processor',
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:pattern_grid'
        )
        .duration(20 * 30)
        .EUt(32)
        .circuit(1)
    event.recipes.gtceu.assembler('refinedstorage:pattern_grid2')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x refinedstorage:improved_processor',
            'refinedstorage:advanced_processor',
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:pattern_grid'
        )
        .duration(20 * 30)
        .EUt(32)
        .circuit(1)
})