ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafting_monitor' })
    event.recipes.gtceu.assembler('refinedstorage:crafting_monitor1')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x kubejs:refined_improved_processor',
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:crafting_monitor'
        )
        .duration(20 * 30)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:crafting_monitor2')
        .itemInputs(
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            '2x kubejs:refined_improved_processor',
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:crafting_monitor'
        )
        .duration(20 * 30)
        .EUt(32)
})