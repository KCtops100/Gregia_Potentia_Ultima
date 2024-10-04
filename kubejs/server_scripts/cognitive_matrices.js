ServerEvents.recipes(event => {
    const recipes = [
        /**
         * Bee
         */

        /**
         * Blaze
         * blaze rod - MV
         */
        ['blaze_rod_from_blaze', 'kubejs:blaze_cognitive_matrix', ['kubejs:inferno_matter', '8x minecraft:blaze_rod'], 200, 128, 0],
        /**
         * Chicken 
         */

         /**
         * Cow 
         */

        /**
         * Creeper
         * gunpowder - LV
         * head - MV
         * uranium ingot - EV
         */
        ['gunpowder_from_creeper', 'kubejs:creeper_cognitive_matrix', ['kubejs:terra_matter', '8x mincraft:gunpowder'], 80, 32, 0],
        ['head_from_creeper', 'kubejs:creeper_cognitive_matrix', ['kubejs:terra_matter', 'minecraft:creeper_head'], 100, 128, 1],
        ['uranium_ingot_from_creeper', 'kubejs:creeper_cognitive_matrix', ['kubejs:terra_matter', 'gtceu:uranium_ingot'], 60, 1028, 2],

        /**
         * Drowned
         * copper ingot - HV
         */
        ['copper_ingot_from_drowned', 'kubejs:drowned_cognitive_matrix', ['kubejs:terra_matter', '4x minecraft:copper_ingot'], 100, 512, 0],
        
        /**
         * Elder Guardian 
         */

        /**
         * Ender Dragon 
         */
        
        /**
         * Enderman
         */

        /**
         * Evoker
         */

       /**
         * Ghast
         */

       /**
         * Guardian
         */

       /**
         * Iron Golem
         */

        /**
         * Magma Cube
         * magma cream - MV
         */
        ['magma_cream_from_magma_cube', 'kubejs:magma_cream_cognitive_matrix', ['kubejs:inferno_matter', '8x minecraft:magma_cream'], 200, 128, 0],
        
        /**
         * Mooshroom
         */

        /**
         * Pig
         */

        /**
         * Piglin
         */

        /**
         * Rabbit
         */

        /**
         * Sheep
         */

        /**
         * Skeleton
         * bones - LV
         * head - MV
         * arrow - LV
         * tin ingot - HV
         */
        ['bones_from_skeleton', 'kubejs:skeleton_cognitive_matrix', ['kubejs:terra_matter', '8x minecraft:bone'], 40, 32, 0],
        ['head_from_skeleton', 'kubejs:skeleton_cognitive_matrix', ['kubejs:terra_matter', 'minecraft:skeleton_skull'], 100, 128, 1],
        ['arrow_from_skeleton', 'kubejs:skeleton_cognitive_matrix', ['kubejs:terra_matter', '8x minecraft:arrow'], 40, 32, 2],
        ['tin_ingot_from_skeleton', 'kubejs:skeleton_cognitive_matrix', ['kubejs:terra_matter', '4x gtceu:tin_ingot'], 100, 512, 3],

        /**
         * Spider
         */

        /**
         * Squid
         */

        /**
         * Wither Skeleton
         * coal - MV
         * lead ingot - HV
         * head - MV
         */
        ['coal_from_wither_skeleton', 'kubejs:wither_skeleton_cognitive_matrix', ['kubejs:inferno_matter', '8x minecraft:coal'], 40, 128, 0],
        ['lead_ingot_from_wither_skeleton', 'kubejs:wither_skeleton_cognitive_matrix', ['kubejs:inferno_matter', '8x gtceu:lead_ingot'], 100, 512, 1],
        ['head_from_wither_skeleton', 'kubejs:wither_skeleton_cognitive_matrix', ['kubejs:inferno_matter', 'minecraft:wither_skeleton_skull'], 100, 128, 2],

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
