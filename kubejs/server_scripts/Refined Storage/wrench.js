ServerEvents.recipes(event => {
    event.remove({output: 'refinedstorage:wrench'})
    event.shaped(
        Item.of('refinedstorage:wrench', 1),
        [
            '   ',
            'SB ',
            ' P '
        ],
        {
            S: 'gtceu:steel_wrench',
            P: 'gtceu:lv_power_unit',
            B: 'kubejs:refined_basic_processor'
        }
    )
})