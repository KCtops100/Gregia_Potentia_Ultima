ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:external_storage' })
    event.shaped(
        Item.of('refinedstorage:external_storage', 1),
        [
            'CAD',
            'HMH',
            'APA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            C: 'refinedstorage:construction_core',
            D: 'refinedstorage:construction_core',
            H: 'forge:chests',
            P: 'refinedstorage:improved_processor',
            M: 'gtceu:lv_field_generator'
        }
    )
})
