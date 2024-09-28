ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:ultra_destructor'})
    event.recipes.gtceu.assembler('Cable Tiers:ultra_destructor1')
        .itemInputs(
            '#gtceu:circuits/ev',
            'refinedstorage:destruction_core',
            'minecraft:dispenser'
        )
        .itemOutputs(
            'Cable Tiers:ultra_destructor'
        )
        .duration(20 * 5)
        .EUt(32)
})
