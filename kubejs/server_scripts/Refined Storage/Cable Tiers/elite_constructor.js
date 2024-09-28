ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:elite_constructor' })
    event.recipes.gtceu.assembler('Cable Tiers:elite_constructor1')
        .itemInputs(
            '#gtceu:circuits/hv',
            'refinedstorage:construction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:elite_constructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
