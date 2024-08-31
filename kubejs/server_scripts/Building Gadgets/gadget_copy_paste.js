ServerEvents.recipes(event => {
    event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
    event.recipes.gtceu.assembler('buildinggadgets2:gadget_copy_paste')
        .itemInputs(
            '3x gtceu:stainless_steel_plate',
            'gtceu:hv_field_generator',
            'gtceu:hv_emitter',
            '#gtceu:batteries/hv'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 2000)
        )
        .itemOutputs(
            'buildinggadgets2:gadget_copy_paste'
        )
        .duration(20)
        .EUt(32)
        .circuit(2)
})