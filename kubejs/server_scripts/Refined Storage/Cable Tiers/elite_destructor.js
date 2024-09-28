ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:elite_destructor'})
    event.recipes.gtceu.assembler('Cable Tiers:elite_destructor1')
        .itemInputs(
            '#gtceu:circuits/hv',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:elite_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
