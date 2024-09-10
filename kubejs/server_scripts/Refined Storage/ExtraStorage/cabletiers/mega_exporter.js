ServerEvents.recipes(ivent=> {
    ivent.remove({ output: 'cabletiers:mega_exporter' })
    ivent.recipes.gtceu.assembler('cabletiers:mega_exporter1')
        .itemInputs(
            'refinedstorage:cable',
            '#gtceu:circuits/iv',
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
