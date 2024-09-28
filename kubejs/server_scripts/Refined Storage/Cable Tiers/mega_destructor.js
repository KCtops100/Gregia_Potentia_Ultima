ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:mega_destructor'})
    event.recipes.gtceu.assembler('Cable Tiers:mega_destructor1')
        .itemInputs(
            '#gtceu:circuits/iv',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:mega_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
