ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:constructor' })
    event.recipes.gtceu.assembler('refinedstorage:constructor1')
        .itemInputs(
            'refinedstorage:refined_improved_processor',
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'refinedstorage:constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
