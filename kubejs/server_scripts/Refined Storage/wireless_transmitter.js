ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:wireless_transmitter' })
    event.recipes.gtceu.assembler('refinedstorage:wireless_transmitter')
        .itemInputs(
            'kubejs:refined_advanced_processor',
            'gtceu:hv_field_generator',
            '3x gtceu:steel_plate',
            'refinedstorage:cable'
        )
        .itemOutputs(
            'refinedstorage:wireless_transmitter'
        )
        .duration(20)
        .EUt(32)
})