ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:ultra_constructor' })
    event.recipes.gtceu.assembler('cabletiers:ultra_constructor1')
        .itemInputs(
            '#gtceu:circuits/iv'
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:ultra_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
