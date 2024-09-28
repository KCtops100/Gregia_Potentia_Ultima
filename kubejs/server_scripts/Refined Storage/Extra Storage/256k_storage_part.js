ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_256k' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_256k')
        .itemInputs(
            '4x refinedstorage:refined_advanced_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/iv',
            '3x refinedstorage:64k_storage_part'
        )
        .itemOutputs(
            'extrastorage:storagepart_256k'
        )
        .duration(20 * 3 * 3 * 3 * 3)
        .EUt(32)
})