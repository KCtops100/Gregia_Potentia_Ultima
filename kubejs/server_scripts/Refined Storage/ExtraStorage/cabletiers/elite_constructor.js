ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:elite_constructor' })
    event.recipes.gtceu.assembler('cabletiers:elite_constructor1')
        .itemInputs(
            '#gtceu:circuits/hv'
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:elite_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
