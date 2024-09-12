ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:upgrade')
        .itemInputs(
            'refinedstorage:improved_processor',
            '3x gtceu:steel_plate',
            '3x gtceu:nether_quartz_plate'
        )
        .itemOutputs(
            'refinedstorage:upgrade'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 2000)
        )
        .duration(20)
        .EUt(32)
})