ServerEvents.recipes(event => {
    const recipes = [
        /**
         * Blaze
         * blaze rod -
         */

        /**
         * Zombie
         * rotten flesh - LV
         * potato - LV
         * carrot - LV
         * head - MV
         * iron ingot - HV
         */
        ['rotten_flesh_from_zombie', 'kubejs:zombie_cognitive_matrix', ['kubejs:terra_matter', '8x minecraft:rotten_flesh'], 20, 32, 0],
        ['potato_from_zombie', 'kubejs:zombie_cognitive_matrix', ['kubejs:terra_matter', '8x minecraft:potato'], 40, 32, 1],
        ['carrot_from_zombie', 'kubejs:zombie_cognitive_matrix', ['kubejs:terra_matter', '8x minecraft:carrot'], 40, 32, 2],
        ['zombie_head_from_zombie', 'kubejs:zombie_cognitive_matrix', ['kubejs:terra_matter', 'minecraft:zombie_head'], 100, 128, 3],
        ['iron_ingot_from_zombie', 'kubejs:zombie_cognitive_matrix', ['kubejs:terra_matter', '4x minecraft:iron_ingot'], 100, 512, 4],
    ]
    recipes.forEach(([recipeName, model, outputs, duration, eut, circuitNumber]) => {
        event.recipes.gtceu.loot_fabrication(recipeName)
            .notConsumable(model)
            .itemInputs('kubejs:neuromold')
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eut)
            .circuit(circuitNumber)
    })
})