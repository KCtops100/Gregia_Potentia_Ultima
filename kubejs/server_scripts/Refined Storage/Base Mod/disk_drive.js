ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:disk_drive' })
    event.recipes.gtceu.assembler('refinedstorage:disk_drive')
        .itemInputs(
            'kubejs:refined_advanced_processor', '6x gtceu:steel_plate', 'gtceu:lv_machine_hull', 'gtceu:steel_crate'
        )
        .itemOutputs(
            'refinedstorage:disk_drive'
        )
        .duration(20 * 15)
        .EUt(32)
})