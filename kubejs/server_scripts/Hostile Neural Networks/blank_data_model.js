ServerEvents.recipes(event => {
    event.remove({output: 'hostilenetworks:blank_data_model'})
    event.recipes.gtceu.circuit_assembler('hostilenetworks:blank_data_model1')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x #gtceu:resistors',
            '2x gtceu:red_alloy_single_wire',
            '2x #gtceu:circuits/ulv',
            'gtceu:blue_alloy_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'hostilenetworks:blank_data_model'
        )
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.circuit_assembler('hostilenetworks:blank_data_model2')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x #gtceu:resistors',
            '2x gtceu:red_alloy_single_wire',
            '2x #gtceu:circuits/ulv',
            'gtceu:blue_alloy_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'hostilenetworks:blank_data_model'
        )
        .duration(200)
        .EUt(16)
})