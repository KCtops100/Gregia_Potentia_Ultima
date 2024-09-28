ServerEvents.recipes(event => {
    event.remove({ output: 'Cable Tiers:ultra_disk_manipulator' })
    event.recipes.gtceu.assembler('Cable Tiers:ultra_disk_manipulator')
        .itemInputs(
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core',
            'gtceu:ev_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:titanium_plate',
            '#gtceu:circuits/ev'
        )
        .itemOutputs(
            'Cable Tiers:ultra_disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})
