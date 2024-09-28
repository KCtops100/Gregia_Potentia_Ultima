ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:elite_importer' })
    event.recipes.gtceu.assembler('Cable Tiers:elite_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/hv',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:elite_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
