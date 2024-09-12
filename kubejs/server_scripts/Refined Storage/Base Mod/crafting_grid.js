ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafting_grid' })
    event.recipes.gtceu.assembler('refinedstorage:crafting_grid1')
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
            'refinedstorage:crafting_grid'
        )
        .duration(20 * 30)
        .EUt(32)
        .circuit(0)
    event.recipes.gtceu.assembler('refinedstorage:crafting_grid2')
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
            'refinedstorage:crafting_grid'
        )
        .duration(20 * 30)
        .EUt(32)
        .circuit(0)
})