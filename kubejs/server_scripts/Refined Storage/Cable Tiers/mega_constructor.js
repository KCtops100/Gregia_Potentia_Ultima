ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:mega_constructor' })
    event.recipes.gtceu.assembler('Cable Tiers:mega_constructor1')
        .itemInputs(
            '#gtceu:circuits/iv',
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:mega_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
