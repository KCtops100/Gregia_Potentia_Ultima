ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:mega_importer' })
    event.recipes.gtceu.assembler('Cable Tiers:mega_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/iv',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:mega_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
