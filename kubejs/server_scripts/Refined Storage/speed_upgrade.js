ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:speed_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:speed_upgrade')
        .itemInputs(
            'refinedstorage:upgrade',
            'gtceu:lv_conveyor_module'
        )
        .itemOutputs(
            'refinedstorage:speed_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1000)
        )
        .duration(20)
        .EUt(32)
})  // ['refinedstorage:speed_upgrade', 'refinedstorage:upgrade', 'gtceu:lv_conveyor_module']