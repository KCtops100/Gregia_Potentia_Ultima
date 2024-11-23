ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('kubejs:bee_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:honeycomb'
        )
        .itemOutputs(
            'kubejs:bee_cognitive_matrix'
        )


    event.recipes.gtceu.circuit_assembler('kubejs:blaze_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:blaze_rod'
        )
        .itemOutputs(
            'kubejs:blaze_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:chicken_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:feather'
        )
        .itemOutputs(
            'kubejs:chicken_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:cow_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:leather'
        )
        .itemOutputs(
            'kubejs:cow_cognitive_matrix'
        )


    event.recipes.gtceu.circuit_assembler('kubejs:creeper_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:gunpowder'
        )
        .itemOutputs(
            'kubejs:creeper_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:drowned_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:rotten_flesh',
            'minecraft:water_bottle'
        )
        .itemOutputs(
            'kubejs:drowned_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:elder_guardian_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/hv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:prismarine_crystals'
        )
        .itemOutputs(
            'kubejs:elder_guardian_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:ender_dragon_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/ev',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:dragon_egg'
        )
        .itemOutputs(
            'kubejs:ender_dragon_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:enderman_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:ender_pearl'
        )
        .itemOutputs(
            'kubejs:enderman_cognitive_matrix'
        )



    event.recipes.gtceu.circuit_assembler('kubejs:ghast_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:ghast_tear'
        )
        .itemOutputs(
            'kubejs:ghast_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:guardian_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:prismarine_shard'
        )
        .itemOutputs(
            'kubejs:guardian_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:iron_golem_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/hv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:poppy'
        )
        .itemOutputs(
            'kubejs:iron_golem_cognitive_matrix'
        )



    event.recipes.gtceu.circuit_assembler('kubejs:magma_cube_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:magma_cream'
        )
        .itemOutputs(
            'kubejs:magma_cube_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:pig_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:raw_pork'
        )
        .itemOutputs(
            'kubejs:blaze_cognitive_matrix'
        )


    event.recipes.gtceu.circuit_assembler('kubejs:skeleton_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:bone'
        )
        .itemOutputs(
            'kubejs:skeleton_cognitive_matrix'
        )

    event.recipes.gtceu.circuit_assembler('kubejs:spider_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:spider_eye'
        )
        .itemOutputs(
            'kubejs:spider_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:sheep_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:raw_mutton'
        )
        .itemOutputs(
            'kubejs:sheep_cognitive_matrix'
        )

event.recipes.gtceu.circuit_assembler('kubejs:squid_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:ink_sac'
        )
        .itemOutputs(
            'kubejs:squid_cognitive_matrix'
        )



event.recipes.gtceu.circuit_assembler('kubejs:wither_skelekton_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:wither_skeleton_skull'
        )
        .itemOutputs(
            'kubejs:wither_skeleton_cognitive_matrix'
        )



    event.recipes.gtceu.circuit_assembler('kubejs:zombie_cognitive_matrix')
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:iron_sword',
            'gtceu:steel_plate',
            'minecraft:rotten_flesh'
        )
        .itemOutputs(
            'kubejs:zombie_cognitive_matrix'
        )

    const recipes = [

        /**
         * Bee
         *
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
        ['magma_cream_from_magma_cube', 'kubejs:magma_cube_cognitive_matrix', ['kubejs:inferno_matter', '8x minecraft:magma_cream'], 200, 128, 0],
        
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

    event.recipes.gtceu.chemical_reactor('kubejs:sentient_putty')
        .itemInputs('gtceu:ender_pearl_dust')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('kubejs:sentient_putty')
        .duration(20*2)
        .EUt(128)
    event.recipes.gtceu.mixer('kubejs:neuromold')
        .itemInputs('kubejs:sentient_putty', 'minecraft:clay_ball')
        .itemOutputs('kubejs:neuromold')
        .duration(20*2)
        .EUt(32)
    event.shaped('gtceu:lv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:steel_plate', 
            B: 'gtceu:lv_field_generator',
            C: '#gtceu:circuits/lv',
            D: 'gtceu:lv_machine_hull',
            E: 'gtceu:manganese_phosphide_quadruple_wire',
            F: 'gtceu:lv_emitter'
        }
    )
    event.shaped('gtceu:mv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:aluminium_plate', 
            B: 'gtceu:mv_field_generator',
            C: '#gtceu:circuits/mv',
            D: 'gtceu:mv_machine_hull',
            E: 'gtceu:magnesium_diboride_quadruple_wire',
            F: 'gtceu:mv_emitter'
        }
    )
    event.shaped('gtceu:hv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:stainless_steel_plate', 
            B: 'gtceu:hv_field_generator',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:hv_machine_hull',
            E: 'gtceu:mercury_barium_calcium_cuprate_quadruple_wire',
            F: 'gtceu:hv_emitter'
        }
    )
    event.shaped('gtceu:ev_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:titanium_plate', 
            B: 'gtceu:ev_field_generator',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:ev_machine_hull',
            E: 'gtceu:uranium_triplatinum_quadruple_wire',
            F: 'gtceu:ev_emitter'
        }
    )
    event.shaped('gtceu:iv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:tungsten_steel_plate', 
            B: 'gtceu:iv_field_generator',
            C: '#gtceu:circuits/iv',
            D: 'gtceu:iv_machine_hull',
            E: 'gtceu:samarium_iron_arsenic_oxide_quadruple_wire',
            F: 'gtceu:iv_emitter'
        }
    )
    event.shaped('gtceu:luv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:rhodium_plated_palladium_plate', 
            B: 'gtceu:luv_field_generator',
            C: '#gtceu:circuits/luv',
            D: 'gtceu:luv_machine_hull',
            E: 'gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire',
            F: 'gtceu:luv_emitter'
        }
    )
    event.shaped('gtceu:zpm_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:darmstadtium_plate', 
            B: 'gtceu:zpm_field_generator',
            C: '#gtceu:circuits/zpm',
            D: 'gtceu:zpm_machine_hull',
            E: 'gtceu:vanadium_gallium_quadruple_wire',
            F: 'gtceu:zpm_emitter'
        }
    )
    event.shaped('gtceu:uv_neural_network_fabricator', [
        'ABA', 
        'CDC',
        'EFE'  
        ], {
            A: 'gtceu:naquadah_alloy_plate', 
            B: 'gtceu:uv_field_generator',
            C: '#gtceu:circuits/uv',
            D: 'gtceu:uv_machine_hull',
            E: 'gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire',
            F: 'gtceu:uv_emitter'
        }
    )
})