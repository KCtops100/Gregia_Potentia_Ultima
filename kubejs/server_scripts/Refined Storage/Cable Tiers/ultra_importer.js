ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:ultra_importer' })
    event.recipes.gtceu.assembler('Cable Tiers:ultra_importer1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/ev',
            'refinedstorage:destruction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:ultra_importer'
        )
        .duration(20 * 5)
        .EUt(32)
})
