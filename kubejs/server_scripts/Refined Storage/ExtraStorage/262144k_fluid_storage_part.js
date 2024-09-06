ServerEvents.recipes(event => {
    event.remove({ output: 'extrastorage:storagepart_262144k_fluid' })
    event.recipes.gtceu.assembler('extrastorage:storagepart_262144k_fluid')
        .itemInputs(
            '4x refinedstorage:refined_basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/zpm',
            '3x extrastorage:storagepart_65536k_fluid'
        )
        .itemOutputs(
            'extrastorage:storagepart_262144k_fluid'
        )
        .duration(20 * 3 * 3 * 3 * 3 * 3 * 3)
        .EUt(32)
})