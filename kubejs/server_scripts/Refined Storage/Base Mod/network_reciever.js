ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:network_receiver' })
    event.recipes.gtceu.assembler('refinedstorage:network_receiver')
        .itemInputs(
            '2x refinedstorage:advanced_processor',
            'refinedstorage:construction_core',
            'refinedstorage:destruction_core',
            'gtceu:hv_machine_hull',
            '#gtceu:circuits/hv',
            'gtceu:hv_sensor',
            '3x refinedstorage:cable'
        )
        .itemOutputs(
            'refinedstorage:network_receiver'
        )
        .duration(20)
        .EUt(32)
        .circuit(0)
})