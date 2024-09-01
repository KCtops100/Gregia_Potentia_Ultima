ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:cable' })
    event.recipes.gtceu.assembler('refinedstorage:cable')
        .itemInputs(
            '3x gtceu:carbon_fiber_plate',
            '3x gtceu:fine_red_alloy_wire'
        )
        .itemOutputs(
            '4x refinedstorage:cable'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 4000)
        )
        .duration(20)
        .EUt(32)
})