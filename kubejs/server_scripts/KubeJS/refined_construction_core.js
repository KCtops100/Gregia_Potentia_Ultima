ServerEvents.recipes(event => {
    event.recipes.gtceu.circuit_assembler('kubejs:refined_construction_core1')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x #gtceu:resistors',
            '2x gtceu:red_alloy_single_wire',
            '2x #gtceu:circuits/ulv',
            'gtceu:iron_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            '2x kubejs:refined_construction_core'
        )
        .duration(200)
        .EUt(16)
        .circuit(1)
    event.recipes.gtceu.circuit_assembler('kubejs:refined_construction_core2')
        .itemInputs(
            'gtceu:resin_printed_circuit_board',
            '2x #gtceu:resistors',
            '2x gtceu:red_alloy_single_wire',
            '2x #gtceu:circuits/ulv',
            'gtceu:iron_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            '2x kubejs:refined_construction_core'
        )
        .duration(200)
        .EUt(16)
        .circuit(1)
})