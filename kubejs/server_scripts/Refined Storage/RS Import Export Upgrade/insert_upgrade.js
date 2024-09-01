ServerEvents.recipes(event => {
    event.remove({ output: 'rsinsertexportupgrade:insert_upgrade' })
    event.recipes.gtceu.assembler('rsinsertexportupgrade:insert_upgrade')
        .itemInputs(
            '4x refinedstorage:speed_upgrade',
            'refinedstorage:stack_upgrade',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            'rsinsertexportupgrade:insert_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glue', 1000)
        )
        .duration(20)
        .EUt(32)
        .circuit(0)
})