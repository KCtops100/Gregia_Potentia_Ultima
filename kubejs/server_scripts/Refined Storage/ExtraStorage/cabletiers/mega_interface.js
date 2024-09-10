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
            A: 'gtceu:tungsten_steel_plate',
            B: 'gtceu:iv_robot_arm',
            C: 'gtceu:iv_machine_hull'
        }
    )
})
