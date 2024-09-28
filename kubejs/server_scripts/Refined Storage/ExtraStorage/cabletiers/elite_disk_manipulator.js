ServerEvents.recipes(event => {
    event.remove({ output: 'cabletiers:elite_disk_manipulator' })
    event.recipes.gtceu.assembler('cabletiers:elite_disk_manipulator')
        .itemInputs(
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core',
            'gtceu:hv_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:aluminium_plate',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            'cabletiers:elite_disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})
