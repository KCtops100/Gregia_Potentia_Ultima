ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:mega_importer' })
    event.recipes.gtceu.assembler('cabletiers:mega_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/ev',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:mega_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
