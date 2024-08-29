ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:pattern' })
    event.recipes.gtceu.assembler('refinedstorage:pattern')
        .itemInputs(
            '3x gtceu:fine_silver_wire',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            '8x refinedstorage:pattern'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .duration(20)
        .EUt(32)
})