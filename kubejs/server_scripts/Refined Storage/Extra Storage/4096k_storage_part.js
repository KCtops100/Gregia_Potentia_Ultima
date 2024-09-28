ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_4096k' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_4096k')
        .itemInputs(
            '4x refinedstorage:refined_advanced_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/zpm',
            '3x extrastorage:storagepart_1024k'
        )
        .itemOutputs(
            'extrastorage:storagepart_4096k'
        )
        .duration(20 * 3 * 3 * 3 * 3 * 3 * 3)
        .EUt(32)
})