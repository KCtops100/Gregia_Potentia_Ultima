ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:1024k_fluid_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:1024k_fluid_storage_part')
        .itemInputs(
            '4x refinedstorage:basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/hv',
            '3x refinedstorage:256k_fluid_storage_part'
        )
        .itemOutputs(
            'refinedstorage:1024k_fluid_storage_part'
        )
        .duration(20 * 3 * 3)
        .EUt(32)
})