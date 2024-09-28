ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:elite_importer' })
    event.recipes.gtceu.assembler('cabletiers:elite_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/hv',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:elite_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
