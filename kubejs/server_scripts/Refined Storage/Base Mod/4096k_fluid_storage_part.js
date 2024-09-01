ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:4096k_fluid_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:4096k_fluid_storage_part')
        .itemInputs(
            '4x kubejs:refined_basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/ev',
            '3x refinedstorage:1024k_fluid_storage_part'
        )
        .itemOutputs(
            'refinedstorage:4096k_fluid_storage_part'
        )
        .duration(20 * 3 * 3 * 3)
        .EUt(32)
})