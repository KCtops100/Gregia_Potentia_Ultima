ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_1048576k_fluid' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_1048576k_fluid')
        .itemInputs(
            '4x kubejs:refined_basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/uv',
            '3x extrastorage:storagepart_262144k_fluid'
        )
        .itemOutputs(
            'extrastorage:storagepart_1048576k_fluid'
        )
        .duration(20 * 3 * 3 * 3 * 3 * 3 * 3 * 3)
        .EUt(32)
})