ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:mega_exporter' })
    event.recipes.gtceu.assembler('Cable Tiers:mega_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/iv',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'Cable Tiers:mega_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
