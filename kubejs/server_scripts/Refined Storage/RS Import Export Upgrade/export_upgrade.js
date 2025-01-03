ServerEvents.recipes(event => {
    event.remove({ output: 'rsinsertexportupgrade:export_upgrade' })
    event.recipes.gtceu.assembler('rsinsertexportupgrade:export_upgrade')
        .itemInputs(
            '4x refinedstorage:speed_upgrade',
            'refinedstorage:stack_upgrade',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            'rsinsertexportupgrade:export_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glue', 1000)
        )
        .duration(20)
        .EUt(32)
        .circuit(1)
})