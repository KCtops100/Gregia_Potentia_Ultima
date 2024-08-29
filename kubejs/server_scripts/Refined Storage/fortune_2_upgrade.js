ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:fortune_2_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:fortune_2_upgrade')
        .itemInputs(
            '2x refinedstorage:fortune_1_upgrade'
        )
        .itemOutputs(
            'refinedstorage:fortune_2_upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glue', 1000)
        )
        .duration(20)
        .EUt(32)
})