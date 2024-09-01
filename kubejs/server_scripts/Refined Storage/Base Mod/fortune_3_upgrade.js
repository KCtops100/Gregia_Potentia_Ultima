ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:fortune_3_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:fortune_3_upgrade')
        .itemInputs(
            '2x refinedstorage:fortune_2_upgrade'
        )
        .itemOutputs(
            'refinedstorage:fortune_3_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glue', 1000)
        )
        .duration(20)
        .EUt(32)
})