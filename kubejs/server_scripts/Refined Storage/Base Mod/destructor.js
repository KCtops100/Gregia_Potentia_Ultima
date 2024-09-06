ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:destructor' })
    event.recipes.gtceu.assembler('refinedstorage:destructor1')
        .itemInputs(
            'refinedstorage:refined_improved_processor',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'refinedstorage:destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
