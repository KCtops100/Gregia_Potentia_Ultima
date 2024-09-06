ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:elite_destructor})
    event.recipes.gtceu.assembler('cabletiers:elite_destructor1')
        .itemInputs(
            '#gtceu:circuits/hv'
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:elite_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
