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
    // https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
    ServerEvents.recipes(event => {
      event.recipes.gtceu.assembler('sophisticatedbackpacks:pickup_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:mv_robot_arm')
        .itemOutputs('sophisticatedbackpacks:pickup_upgrade')
        .duration(200)
        .EUt(128)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_pickup_upgrade')
        .itemInputs('sophisticatedbackpacks:pickup_upgrade', 'gtceu:item_filter')
        .itemOutputs('sophisticatedbackpacks:advanced_pickup_upgrade')
        .duration(100)
        .EUt(512)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:filter_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:item_filter')
        .itemOutputs('sophisticatedbackpacks:filter_upgrade')
        .duration(200)
        .EUt(128)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_filter_upgrade')
        .itemInputs('sophisticatedbackpacks:filter_upgrade', 'gtceu:item_filter')
        .itemOutputs('sophisticatedbackpacks:advanced_filter_upgrade')
        .duration(100)
        .EUt(512)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:magnet_upgrade')
        .itemInputs('sophisticatedbackpacks:pickup_upgrade', 'gtceu:hv_item_magnet')
        .itemOutputs('sophisticatedbackpacks:magnet_upgrade')
        .duration(200)
        .EUt(512)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_magnet_upgrade')
        .itemInputs('sophisticatedbackpacks:magnet_upgrade', 'gtceu:item_filter')
        .itemOutputs('sophisticatedbackpacks:advanced_magnet_upgrade')
        .duration(100)
        .EUt(2048)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:feeding_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:item_filter', 'gtceu:mv_robot_arm')
        .itemOutputs('sophisticatedbackpacks:feeding_upgrade')
        .duration(500)
        .EUt(128)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_feeding_upgrade')
        .itemInputs('sophisticatedbackpacks:feeding_upgrade', '#gtceu:circuits/hv')
        .itemOutputs('sophisticatedbackpacks:advanced_feeding_upgrade')
        .duration(200)
        .EUt(512)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:compacting_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:mv_electric_piston', '#gtceu:circuits/mv')
        .itemOutputs('sophisticatedbackpacks:compacting_upgrade')
        .duration(500)
        .EUt(128)
      event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_compacting_upgrade')
        .itemInputs('sophisticatedbackpacks:compacting_upgrade', 'gtceu:item_filter', '#gtceu:circuits/mv')
        .itemOutputs('sophisticatedbackpacks:advanced_compacting_upgrade')
        .duration(500)
        .EUt(512)
  })
})