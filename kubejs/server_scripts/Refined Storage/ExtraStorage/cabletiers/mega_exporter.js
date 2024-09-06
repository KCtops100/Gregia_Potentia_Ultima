ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:mega_exporter' })
    event.recipes.gtceu.assembler('cabletiers:mega_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/ev',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:mega_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
