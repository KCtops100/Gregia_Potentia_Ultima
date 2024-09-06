ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:mega_interface' })
    event.shaped(
        Item.of('cabletiers:mega_interface', 1),
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
