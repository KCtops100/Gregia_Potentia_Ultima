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


        /**
         * ['minecraft:chorus_flower', 'minecraft:chorus_fruit']
         */
    ]
    recipes.forEach(([input, output, duration, eut]) => {
        event.recipes.gtceu.plant_growing(input)
            .notConsumable(input)
            .itemOutputs(output)
            .inputFluids('minecraft:water', 1000)
            .chancedOutput(input, 5000, 2500)
            .duration(duration)
            .EUt(eut)
    })
})
