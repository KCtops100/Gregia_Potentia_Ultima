ServerEvents.recipes(event => {
    event.remove({ output: 'Cable Tiers:elite_disk_manipulator' })
    event.recipes.gtceu.assembler('Cable Tiers:elite_disk_manipulator')
        .itemInputs(
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core',
            'gtceu:hv_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:aluminium_plate',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            'Cable Tiers:elite_disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})
