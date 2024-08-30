ServerEvents.recipes(event => {
    event.recipes.gtceu.alloy_smelter('kubejs:refined_basic_processor1')
        .itemInputs(
            'gtceu:steel_ingot', 'gtceu:obsidian_dust'
        )
        .itemOutputs(
            'gtceu:dark_steel_ingot'
        )
        .duration(20 * 5)
        .EUt(32)
})