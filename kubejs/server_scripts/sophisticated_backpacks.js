// https://kubejs.com/wiki/tutorials/recipes#removing-recipes

ServerEvents.recipes(event => {
    // https://kubejs.com/wiki/tutorials/recipes#removing-recipes
    event.remove({ mod: 'sophisticatedbackpacks' })
    // https://kubejs.com/wiki/tutorials/recipes#shaped
    // "Steel" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:steel_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:steel_screw',
          D: 'gtceu:double_steel_plate'
        }
    )
    // "Aluminum" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:copper_backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:aluminium_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:aluminium_screw',
          D: 'gtceu:double_aluminium_plate'
        }
    )
    // "Stainless Steel" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:iron_backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:stainless_steel_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:stainless_steel_screw',
          D: 'gtceu:double_stainless_steel_plate'
        }
    )
    // "Titanium" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:gold_backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:titanium_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:titanium_screw',
          D: 'gtceu:double_titanium_plate'
        }
    )
    // "Tungstensteel" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:diamond_backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:tungsten_steel_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:tungsten_steel_screw',
          D: 'gtceu:double_tungsten_steel_plate'
        }
    )
    // "Rhodium Plated Palladium" Backpack
    event.shaped(
        Item.of('sophisticatedbackpacks:netherite_backpack', 1),
        [
          'RLR',
          'SDS',
          'CLC'
        ],
        {
          R: 'gtceu:rhodium_plated_palladium_rod',
          L: 'minecraft:leather',
          S: 'minecraft:string',
          C: 'gtceu:rhodium_plated_palladium_screw',
          D: 'gtceu:double_rhodium_plated_palladium_plate'
        }
    )
})