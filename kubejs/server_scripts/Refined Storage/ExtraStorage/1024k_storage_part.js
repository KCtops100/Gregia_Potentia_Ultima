ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_1024k' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_1024k')
        .itemInputs(
            '4x refinedstorage:advanced_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/luv',
            '3x extrastorage:storagepart_256k'
        )
        .itemOutputs(
            'extrastorage:storagepart_1024k'
        )
        .duration(20 * 3 * 3 * 3 * 3 * 3)
        .EUt(32)
})