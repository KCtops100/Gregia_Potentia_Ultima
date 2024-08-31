ServerEvents.recipes(event => {
    event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
    event.recipes.gtceu.assembler('buildinggadgets2:gadget_cut_paste')
        .itemInputs(
            '3x gtceu:steel_plate',
            'gtceu:lv_field_generator',
            'gtceu:lv_emitter',
            '#gtceu:batteries/lv'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 2000)
        )
        .itemOutputs(
            'buildinggadgets2:gadget_cut_paste'
        )
        .duration(20)
        .EUt(32)
        .circuit(0)
})