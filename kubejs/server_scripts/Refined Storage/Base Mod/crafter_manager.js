ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafter_manager' })
    event.recipes.gtceu.assembler('refinedstorage:crafter_manager1')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x refinedstorage:advanced_processor',
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:crafter_manager'
        )
        .duration(20 * 30)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:crafter_manager2')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x refinedstorage:advanced_processor',
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:crafter_manager'
        )
        .duration(20 * 30)
        .EUt(32)
})