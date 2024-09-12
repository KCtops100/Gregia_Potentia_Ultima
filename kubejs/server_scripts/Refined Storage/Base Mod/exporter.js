ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:exporter' })
    event.recipes.gtceu.assembler('refinedstorage:exporter1')
        .itemInputs(
            'refinedstorage:cable',
            'refinedstorage:improved_processor',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'refinedstorage:exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
