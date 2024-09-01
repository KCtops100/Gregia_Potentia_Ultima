ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:security_manager' })
    event.recipes.gtceu.assembler('refinedstorage:security_manager')
        .itemInputs(
            'gtceu:steel_crate',
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate',
            '3x refinedstorage:security_card'
        )
        .itemOutputs(
            'refinedstorage:security_manager'
        )
        .duration(20)
        .EUt(32)
})