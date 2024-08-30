ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:disk_manipulator' })
    event.recipes.gtceu.assembler('refinedstorage:disk_manipulator')
        .itemInputs(
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate',
            'gtceu:aluminium_plate',
            'gtceu:basic_electronic_circuit'
        )
        .itemOutputs(
            'refinedstorage:disk_manipulator'
        )
        .duration(20)
        .EUt(32)
})