ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorageaddons:wireless_crafting_grid' })
    event.recipes.gtceu.assembler('refinedstorageaddons:wireless_crafting_grid')
        .itemInputs(
            '3x refinedstorage:refined_advanced_processor',
            'refinedstorage:refined_construction_core',
            'refinedstorage:refined_destruction_core',
            'gtceu:hv_field_generator',
            'refinedstorage:wireless_grid'
        )
        .itemOutputs(
            'refinedstorageaddons:wireless_crafting_grid'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144 * 4)
        )
        .duration(20)
        .EUt(32)
})