ServerEvents.recipes(event=> {
    event.remove({ output: 'extrastorage:iron_crafter' })
    event.shaped(
        Item.of('extrastorage:iron_crafter', 1),
        [
            'SHS',
            'CLC',
            'SCS'
        ],
        {
            S:  'gtceu:steel_plate',
            H:  '#gtceu:circuits/hv',
            C:  'refinedstorage:crafter',
            L:  'gtceu:hv_machine_hull'
        }
    )
})
