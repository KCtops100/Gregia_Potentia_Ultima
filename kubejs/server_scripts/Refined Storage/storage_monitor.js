ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:storage_monitor' })
    event.recipes.gtceu.assembler('refinedstorage:storage_monitor1')
        .itemInputs(
            '2x kubejs:refined_basic_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            'gtceu:steel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:storage_monitor'
        )
        .duration(20 * 15)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:storage_monitor2')
        .itemInputs(
            '2x kubejs:refined_basic_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:lv_machine_hull',
            'gtceu:computer_monitor_cover',
            'gtceu:steel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:storage_monitor'
        )
        .duration(20 * 15)
        .EUt(32)
})