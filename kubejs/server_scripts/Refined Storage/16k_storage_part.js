ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:16k_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:16k_storage_part')
        .itemInputs(
            '4x kubejs:refined_improved_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/hv',
            '3x refinedstorage:4k_storage_part'
        )
        .itemOutputs(
            'refinedstorage:16k_storage_part'
        )
        .duration(20 * 3 * 3)
        .EUt(32)
})