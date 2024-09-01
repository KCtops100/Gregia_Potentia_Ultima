ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:controller' })
    event.recipes.gtceu.assembler('refinedstorage:controller1')
        .itemInputs(
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate',
            'kubejs:refined_advanced_processor',
            '3x refinedstorage:cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'refinedstorage:controller'
        )
        .duration(20 * 60)
        .EUt(32)
    event.recipes.gtceu.assembler('refinedstorage:controller2')
        .itemInputs(
            'gtceu:lv_machine_hull',
            '4x gtceu:steel_plate',
            'kubejs:refined_advanced_processor',
            '3x refinedstorage:cable'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'refinedstorage:controller'
        )
        .duration(20 * 60)
        .EUt(32)
})