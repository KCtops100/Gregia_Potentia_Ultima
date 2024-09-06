ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:mega_destructor})
    event.recipes.gtceu.assembler('cabletiers:mega_destructor1')
        .itemInputs(
            '#gtceu:circuits/ev'
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:mega_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
