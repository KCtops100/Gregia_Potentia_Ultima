ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:64k_fluid_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:64k_fluid_storage_part')
        .itemInputs(
            'gtceu:steel_plate',
            '4x gtceu:silicon_foil',
            '#gtceu:circuits/lv'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 2000)
        )
        .itemOutputs(
            'refinedstorage:64k_fluid_storage_part'
        )
        .duration(20)
        .EUt(32)
        .circuit(1)
})