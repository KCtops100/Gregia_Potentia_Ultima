ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_16384k_fluid' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_16384k_fluid')
        .itemInputs(
            '4x kubejs:refined_basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/iv',
            '3x refinedstorage:4096k_fluid_storage_part'
        )
        .itemOutputs(
            'extrastorage:storagepart_16384k_fluid'
        )
        .duration(20 * 3 * 3 * 3 * 3)
        .EUt(32)
})