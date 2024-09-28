ServerEvents.recipes(event => {
    event.remove({ output: 'Cable Tiers:mega_disk_manipulator' })
    event.recipes.gtceu.assembler('Cable Tiers:mega_disk_manipulator')
        .itemInputs(
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core',
            'gtceu:iv_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:tungsten_steel_plate',
            '#gtceu:circuits/iv'
        )
        .itemOutputs(
            'Cable Tiers:mega_disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})
