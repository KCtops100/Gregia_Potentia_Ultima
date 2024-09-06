ServerEvents.recipes(event => {
    event.remove({ output: 'cabletiers:mega_disk_manipulator' })
    event.recipes.gtceu.assembler('cabletiers:mega_disk_manipulator')
        .itemInputs(
            'refinedstorage:refined_construction_core',
            'refinedstorage:refined_destruction_core',
            'gtceu:ev_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:titanium_plate',
            '#gtceu:circuits/ev'
        )
        .itemOutputs(
            'cabletiers:mega_disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})
