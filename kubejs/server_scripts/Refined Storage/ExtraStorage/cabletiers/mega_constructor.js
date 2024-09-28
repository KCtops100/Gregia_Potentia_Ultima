ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:mega_constructor' })
    event.recipes.gtceu.assembler('cabletiers:mega_constructor1')
        .itemInputs(
            '#gtceu:circuits/iv',
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:mega_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
