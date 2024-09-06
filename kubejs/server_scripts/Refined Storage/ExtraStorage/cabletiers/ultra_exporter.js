ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:ultra_exporter' })
    event.recipes.gtceu.assembler('cabletiers:ultra_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/iv',
            'refinedstorage:construction_core'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 1000)
        )
        .itemOutputs(
            'cabletiers:ultra_exporter'
        )
        .duration(20 * 5)
        .EUt(32)
})
