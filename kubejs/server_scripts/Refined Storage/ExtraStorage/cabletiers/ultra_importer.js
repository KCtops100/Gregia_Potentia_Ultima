ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:ultra_importer' })
    event.recipes.gtceu.assembler('cabletiers:ultra_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/iv',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:ultra_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
