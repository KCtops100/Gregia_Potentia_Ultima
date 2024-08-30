ServerEvents.recipes(event=> {
    event.remove({ output: 'refinedstorage:fluid_interface' })
    event.shaped(
        Item.of('refinedstorage:fluid_interface', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'gtceu:lapis_plate',
            B: 'gtceu:mv_electric_pump',
            C: 'gtceu:mv_machine_hull'
        }
    )
})
