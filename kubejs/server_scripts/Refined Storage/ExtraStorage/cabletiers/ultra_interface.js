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
            A: 'gtceu:tungstensteel_plate',
            B: 'gtceu:iv_robot_arm',
            C: 'gtceu:iv_machine_hull'
        }
    )
})
