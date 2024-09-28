ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:ultra_exporter' })
    event.recipes.gtceu.assembler('Cable Tiers:ultra_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/ev',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:ultra_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
