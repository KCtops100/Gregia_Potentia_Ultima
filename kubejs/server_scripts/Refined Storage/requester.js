ServerEvents.recipes(event=> {
    event.remove({ output: 'rsrequestify:requester' })
    event.shaped(
        Item.of('rsrequestify:requester', 1),
        [
            'AEA',
            'DBD',
            'ACA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_machine_hull',
            C: 'refinedstorage:advanced_processor',
            D: 'refinedstorage:crafting_upgrade',
            E: 'refinedstorage:detector'
        }
    )
})
