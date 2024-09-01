ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:wireless_grid' })
    event.recipes.gtceu.assembler('refinedstorage:wireless_grid')
        .itemInputs(
            'kubejs:refined_advanced_processor',
            '6x gtceu:steel_plate',
            'gtceu:computer_monitor_cover',
            'gtceu:hv_field_generator',
            '2x gtceu:hv_sensor',
            '#gtceu:batteries/hv'
        )
        .itemOutputs(
            'refinedstorage:wireless_grid'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144 * 4)
        )
        .duration(20)
        .EUt(32)
        .circuit(0)
})