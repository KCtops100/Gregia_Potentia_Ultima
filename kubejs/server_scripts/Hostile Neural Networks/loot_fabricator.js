ServerEvents.recipes(event => {
    event.remove({output: 'hostilenetworks:loot_fabricator'})
    event.shaped(
        Item.of('hostilenetworks:loot_fabricator', 1),
        [
            'DCD',
            'LVL',
            'DFD'
        ],
        {
            C:  'gtceu:mv_robot_arm',
            D:  'gtceu:dark_steel_plate',
            F:  '#gtceu:circuits/mv',
            L:  'gtceu:mv_sensor',
            V:  'gtceu:mv_machine_hull'
        }
    )
})