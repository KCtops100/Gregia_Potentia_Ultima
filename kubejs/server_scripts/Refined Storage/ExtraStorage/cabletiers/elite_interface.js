ServerEvents.recipes(event=> {
    event.remove({ output: 'cabletiers:elite_interface' })
    event.shaped(
        Item.of('cabletiers:elite_interface', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'gtceu:stainless_steel_plate',
            B: 'gtceu:hv_robot_arm',
            C: 'gtceu:hv_machine_hull'
        }
    )
})
