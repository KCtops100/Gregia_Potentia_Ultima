ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:importer' })
    event.recipes.gtceu.assembler('refinedstorage:importer1')
        .itemInputs(
            'refinedstorage:cable',
            'refinedstorage:improved_processor',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'refinedstorage:importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
