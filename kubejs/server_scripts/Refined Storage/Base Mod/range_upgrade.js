ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:range_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:range_upgrade')
        .itemInputs(
            '5x gtceu:steel_ingot', 'refinedstorage:upgrade', 'gtceu:lv_field_generator'
        )
        .itemOutputs(
            'refinedstorage:range_upgrade'
        )
        .duration(20)
        .EUt(32)
})  // ['refinedstorage:range_upgrade', '5x gtceu:steel_ingot', 'refinedstorage:upgrade', 'gtceu:lv_field_generator']