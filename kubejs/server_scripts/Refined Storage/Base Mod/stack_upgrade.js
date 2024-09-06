ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:stack_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:stack_upgrade')
        .itemInputs(
            '4x refinedstorage:speed_upgrade'
        )
        .itemOutputs(
            'refinedstorage:stack_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glue', 1000)
        )
        .duration(20)
        .EUt(32)
})