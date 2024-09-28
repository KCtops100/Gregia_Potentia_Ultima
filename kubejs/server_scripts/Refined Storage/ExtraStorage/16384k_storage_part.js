ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_16384k' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_16384k')
        .itemInputs(
            '4x refinedstorage:advanced_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/uv',
            '3x extrastorage:storagepart_4096k'
        )
        .itemOutputs(
            'extrastorage:storagepart_16384k'
        )
        .duration(20 * 3 * 3 * 3 * 3 * 3 * 3 * 3)
        .EUt(32)
})