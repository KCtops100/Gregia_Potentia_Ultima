ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:network_transmitter' })
    event.recipes.gtceu.assembler('refinedstorage:network_transmitter')
        .itemInputs(
            '2x kubejs:refined_advanced_processor',
            'kubejs:refined_construction_core',
            'kubejs:refined_destruction_core',
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            'gtceu:hv_sensor',
            '3x refinedstorage:cable'
        )
        .itemOutputs(
            'refinedstorage:network_transmitter'
        )
        .duration(20)
        .EUt(32)
        .circuit(1)
})