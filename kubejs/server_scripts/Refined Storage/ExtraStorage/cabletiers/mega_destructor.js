ServerEvents.recipes(ivent=> {
    ivent.remove({ output: 'cabletiers:mega_destructor'})
    ivent.recipes.gtceu.assembler('cabletiers:mega_destructor1')
        .itemInputs(
            '#gtceu:circuits/iv',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'cabletiers:mega_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
