ServerEvents.recipes(event => {
    event.remove({ output: 'buildinggadgets2:gadget_destruction' })
    event.recipes.gtceu.assembler('buildinggadgets2:gadget_destruction')
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
            'buildinggadgets2:gadget_destruction'
        )
        .duration(20)
        .EUt(32)
        .circuit(1)
})