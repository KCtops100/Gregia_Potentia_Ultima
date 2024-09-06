ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:64k_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:64k_storage_part')
        .itemInputs(
            '4x refinedstorage:refined_advanced_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/ev',
            '3x refinedstorage:16k_storage_part'
        )
        .itemOutputs(
            'refinedstorage:64k_storage_part'
        )
        .duration(20 * 3 * 3 * 3)
        .EUt(32)
})