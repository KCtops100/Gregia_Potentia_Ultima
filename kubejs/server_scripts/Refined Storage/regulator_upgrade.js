ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:regulator_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:regulator_upgrade')
        .itemInputs(
            '5x gtceu:steel_plate', 'gtceu:lv_robot_arm', 'refinedstorage:upgrade'
        )
        .itemOutputs(
            'refinedstorage:regulator_upgrade'
        )
        .duration(20)
        .EUt(32)
})