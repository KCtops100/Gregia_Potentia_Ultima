ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:4k_storage_part' })
    event.recipes.gtceu.assembler('refinedstorage:4k_storage_part')
        .itemInputs(
            '4x kubejs:refined_basic_processor',
            'gtceu:steel_plate',
            '#gtceu:circuits/mv',
            '3x refinedstorage:1k_storage_part'
        )
        .itemOutputs(
            'refinedstorage:4k_storage_part'
        )
        .duration(20 * 3)
        .EUt(32)
})