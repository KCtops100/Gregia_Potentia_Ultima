ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:elite_exporter' })
    event.recipes.gtceu.assembler('Cable Tiers:elite_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/hv',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:elite_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
