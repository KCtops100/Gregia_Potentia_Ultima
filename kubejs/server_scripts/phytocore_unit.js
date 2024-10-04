ServerEvents.recipes(event => {
    const recipes = [
        ['minecraft:wheat_seeds', 'minecraft:wheat', 20 * 5, 32],
        ['minecraft:carrot', 'minecraft:carrot', 20 * 5, 32],
        ['minecraft:potato', 'minecraft:potato', 20 * 5, 32],
        ['minecraft:pumpkin_seeds', 'minecraft:pumpkin', 20 * 5, 32],
        ['minecraft:melon_seeds', 'minecraft:melon', 20 * 5, 32],
        ['minecraft:beetroot_seeds', 'minecraft:beetroot', 20 * 5, 32],
        ['minecraft:sugar_cane', 'minecraft:dirt', 'minecraft:sugar_cane', 20 * 5, 32],
        ['minecraft:brown_mushroom', 'minecraft:brown_mushroom', 20 * 5, 32],
        ['minecraft:red_mushroom', 'minecraft:red_mushroom', 20 * 5, 32],

        /**
         * 'minecraft:crimson_fungus','minecraft:warped_fungus', 'minecraft:dandelion', 'minecraft:poppy', 'minecraft:blue_orchid', 'minecraft:allium', 'minecraft:azure_bluet', 'minecraft:red_tulip', 'minecraft:orange_tulip', 'minecraft:white_tulip', 'minecraft:pink_tulip', 'minecraft:oxeye_daisy', 'minecraft:cornflower', 'minecraft:lily_of_the_valley']
         */
    ]
    recipes.forEach(([input, output, duration, eut]) => {
        event.recipes.gtceu.plant_growing(input)
            .notConsumable(input)
            .itemOutputs(output)
            .inputFluids('minecraft:water', 1000)
            .chancedOutput(input, 0.5, 10)
            .duration(duration)
            .EUt(eut)
    })
})
