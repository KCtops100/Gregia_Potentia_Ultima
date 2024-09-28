ServerEvents.recipes(event=> {
    event.remove({ output: 'Cable Tiers:mega_interface' })
    event.shaped(
        Item.of('Cable Tiers:mega_interface', 1),
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
