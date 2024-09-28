ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:ultra_interface' })
    event.shaped(
        Item.of('cabletiers:ultra_interface', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'gtceu:titanium_plate',
            B: 'gtceu:ev_robot_arm',
            C: 'gtceu:ev_machine_hull'
        }
    )
})
