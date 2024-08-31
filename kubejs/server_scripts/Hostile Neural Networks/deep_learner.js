ServerEvents.recipes(event => {
    event.remove({output: 'hostilenetworks:deep_learner'})
    event.shaped(
        Item.of('hostilenetworks:deep_learner', 1),
        [
            'DLD',
            'LVL',
            'DFD'
        ],
        {
            D:  'gtceu:dark_steel_plate',
            F:  '#gtceu:batteries/lv',
            L:  '#gtceu:circuits/lv',
            V:  'gtceu:computer_monitor_cover'
        }
    )
})