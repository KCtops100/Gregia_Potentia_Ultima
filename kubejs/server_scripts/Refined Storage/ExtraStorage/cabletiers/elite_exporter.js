ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:elite_exporter' })
    event.recipes.gtceu.assembler('cabletiers:elite_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/hv',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:elite_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
