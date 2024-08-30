ServerEvents.recipes(event => {
    event.remove({output: 'hostilenetworks:sim_chamber'})
    event.shaped(
        Item.of('hostilenetworks:sim_chamber', 1),
        [
            'DCD',
            'LVL',
            'DFD'
        ],
        {
            C:  'gtceu:mv_robot_arm',
            D:  'gtceu:dark_steel_plate',
            F:  '#gtceu:circuits/lv',
            L:  'gtceu:lv_sensor',
            V:  'gtceu:lv_machine_hull'
        }
    )
})