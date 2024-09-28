ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:ultra_constructor' })
    event.recipes.gtceu.assembler('Cable Tiers:ultra_constructor1')
        .itemInputs(
            '#gtceu:circuits/ev',
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:ultra_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
