ServerEvents.recipes(event => {
    const recipes = [
        ['minecraft:wheat_seeds', 'minecraft:wheat', 20 * 5, 32],
        ['minecraft:carrot', 'minecraft:carrot', 20 * 5, 32],
        ['minecraft:potato', 'minecraft:potato', 20 * 5, 32],
        ['minecraft:pumpkin_seeds', 'minecraft:pumpkin', 20 * 5, 32],
        ['minecraft:melon_seeds', 'minecraft:melon', 20 * 5, 32],
        ['minecraft:beetroot_seeds', 'minecraft:beetroot', 20 * 5, 32],
        ['minecraft:sugar_cane', 'minecraft:sugar_cane', 20 * 5, 32],
        ['minecraft:brown_mushroom', 'minecraft:brown_mushroom', 20 * 5, 32],
        ['minecraft:red_mushroom', 'minecraft:red_mushroom', 20 * 5, 32],
        ['minecraft:crimson_fungus', 'minecraft:crimson_fungus', 20 * 5, 32],
        ['minecraft:warped_fungus', 'minecraft:warped_fungus', 20 * 5, 32],
        ['minecraft:dandelion', 'minecraft:dandelion', 20 * 5, 32],
        ['minecraft:poppy', 'minecraft:poppy', 20 * 5, 32],
        ['minecraft:blue_orchid', 'minecraft:blue_orchid', 20 * 5, 32],
        ['minecraft:allium', 'minecraft:allium', 20 * 5, 32],
        ['minecraft:azure_bluet', 'minecraft:azure_bluet', 20 * 5, 32],
        ['minecraft:red_tulip', 'minecraft:red_tulip', 20 * 5, 32],
        ['minecraft:orange_tulip', 'minecraft:orange_tulip', 20 * 5, 32],
        ['minecraft:white_tulip', 'minecraft:white_tulip', 20 * 5, 32],
        ['minecraft:pink_tulip', 'minecraft:pink_tulip', 20 * 5, 32],
        ['minecraft:oxeye_daisy', 'minecraft:oxeye_daisy', 20 * 5, 32],
        ['minecraft:cornflower', 'minecraft:cornflower', 20 * 5, 32],
        ['minecraft:lily_of_the_valley', 'minecraft:lily_of_the_valley', 20 * 5, 32],
        ['minecraft:wither_rose', 'minecraft:wither_rose', 20 * 5, 32],
        ['minecraft:bamboo', 'minecraft:bamboo', 20 * 5, 32],
        ['minecraft:cactus', 'minecraft:cactus', 20 * 5, 32],
        ['minecraft:sunflower', 'minecraft:sunflower', 20 * 5, 32],
        ['minecraft:lilac', 'minecraft:lilac', 20 * 5, 32],
        ['minecraft:rose_bush', 'minecraft:rose_bush', 20 * 5, 32],
        ['minecraft:peony', 'minecraft:peony', 20 * 5, 32],
        ['minecraft:pitcher_pod', 'minecraft:pitcher_plant', 20 * 5, 32],
        ['minecraft:chorus_flower', 'minecraft:chorus_fruit', 20 * 5, 32],
        ['minecraft:torchflower_seeds', 'minecraft:torchflower', 20 * 5, 32],
    ]
    // https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
    // https://github.com/GregTechCEu/GregTech-Modern/blob/1.20.1/src/main/java/com/gregtechceu/gtceu/integration/kjs/recipe/GTRecipeSchema.java 
    recipes.forEach(([input, output, duration, eut]) => {
        event.recipes.gtceu.plant_growing(input)
            .notConsumable(input)
            .itemOutputs(output)
            .inputFluids('minecraft:water', 1000)
            .chancedOutput(input, 5000, 2500)
            .duration(duration)
            .EUt(eut)

        event.recipes.gtceu.plant_growing(input + "2")
            .notConsumable(input)
            .itemOutputs(output)
            .inputFluids('minecraft:water', 1000)
            .chancedOutput(input, 5000, 2500)
            .duration(Math.floor(duration / 2))
            .EUt(Math.floor(eut * 1.5))
            .chancedInput('gtceu:fertilizer', 5000, 2500);
    })
    event.shaped('gtceu:lv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:steel_plate', 
            B: 'gtceu:lv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:lv_machine_hull',
            F: '#gtceu:circuits/lv'
        }
    )
    event.shaped('gtceu:mv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:aluminium_plate', 
            B: 'gtceu:mv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:mv_machine_hull',
            F: '#gtceu:circuits/mv'
        }
    )
    event.shaped('gtceu:hv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:stainless_steel_plate', 
            B: 'gtceu:hv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:hv_machine_hull',
            F: '#gtceu:circuits/hv'
        }
    )
    event.shaped('gtceu:ev_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:titanium_plate', 
            B: 'gtceu:ev_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:ev_machine_hull',
            F: '#gtceu:circuits/ev'
        }
    )
    event.shaped('gtceu:iv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:tungsten_steel_plate', 
            B: 'gtceu:iv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:iv_machine_hull',
            F: '#gtceu:circuits/iv'
        }
    )
    event.shaped('gtceu:luv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:rhodium_plated_palladium_plate', 
            B: 'gtceu:luv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:luv_machine_hull',
            F: '#gtceu:circuits/luv'
        }
    )
    event.shaped('gtceu:zpm_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:darmstadtium_plate', 
            B: 'gtceu:zpm_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:zpm_machine_hull',
            F: '#gtceu:circuits/zpm'
        }
    )
    event.shaped('gtceu:uv_phyto_core_unit', [
        'ABA', 
        'CDC',
        'AFA'  
        ], {
            A: 'gtceu:naquadah_alloy_plate', 
            B: 'gtceu:uv_electric_pump',
            C: 'gtceu:glowstone_plate',
            D: 'gtceu:uv_machine_hull',
            F: '#gtceu:circuits/uv'
        }
    )
})
