ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:256k_fluid_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:256k_fluid_storage_part')
        .itemInputs(
            '4x refinedstorage:basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/mv',
            '3x refinedstorage:64k_fluid_storage_part'
        )
        .itemOutputs(
            'refinedstorage:256k_fluid_storage_part'
        )
        .duration(20 * 3)
        .EUt(32)
})