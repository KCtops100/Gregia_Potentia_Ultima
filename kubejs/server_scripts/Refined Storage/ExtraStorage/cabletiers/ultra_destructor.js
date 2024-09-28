ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:ultra_destructor'})
    event.recipes.gtceu.assembler('cabletiers:ultra_destructor1')
        .itemInputs(
            '#gtceu:circuits/ev',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:ultra_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
