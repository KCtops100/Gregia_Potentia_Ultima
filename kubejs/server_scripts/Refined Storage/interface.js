ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:interface' })
    event.shaped(
        Item.of('refinedstorage:interface', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_robot_arm',
            C: 'gtceu:mv_machine_hull'
        }
    )
})
