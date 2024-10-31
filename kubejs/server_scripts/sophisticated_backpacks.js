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
  event.recipes.gtceu.assembler('sophisticatedbackpacks:pickup_upgrade')
    .itemInputs('gtceu:mv_robot_arm', '2x gtceu:aluminium_plate', 'gtceu:item_filter', '3x gtceu:copper_single_cable')
    .itemOutputs('sophisticatedbackpacks:pickup_upgrade')
    .duration(200)
    .EUt(128)
    .circuit(0)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_pickup_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:pickup_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_pickup_upgrade')
    .duration(100)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:filter_upgrade')
    .itemInputs(['gtceu:zinc_foil', '4x gtceu:aluminium_plate', '4x gtceu:copper_single_cable'])
    .itemOutputs('sophisticatedbackpacks:filter_upgrade')
    .duration(200)
    .EUt(128)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_filter_upgrade')
    .itemInputs(['sophisticatedbackpacks:filter_upgrade', '2x gtceu:stainless_steel_plate', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_filter_upgrade')
    .duration(100)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:magnet_upgrade')
    .itemInputs(['2x gtceu:magnetic_steel_plate', '3x gtceu:stainless_steel_plate', '2x gtceu:gold_single_cable', 'sophisticatedbackpacks:pickup_upgrade'])
    .itemOutputs('sophisticatedbackpacks:magnet_upgrade')
    .duration(200)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_magnet_upgrade1')
    .itemInputs(['sophisticatedbackpacks:magnet_upgrade', 'gtceu:dense_magnetic_steel_plate', '2x gtceu:titanium_plate', '3x gtceu:aluminium_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_magnet_upgrade')
    .duration(100)
    .EUt(2048)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_magnet_upgrade2')
    .itemInputs(['sophisticatedbackpacks:advanced_pickup_upgrade', 'gtceu:dense_magnetic_steel_plate', '3x gtceu:titanium_plate', '2x gtceu:aluminium_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_magnet_upgrade')
    .duration(100)
    .EUt(2048)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:feeding_upgrade')
    .itemInputs('gtceu:mv_robot_arm', '2x gtceu:aluminium_plate', 'gtceu:item_filter', '3x gtceu:copper_single_cable')
    .itemOutputs('sophisticatedbackpacks:feeding_upgrade')
    .duration(500)
    .EUt(128)
    .circuit(1)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_feeding_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:feeding_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_feeding_upgrade')
    .duration(200)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:compacting_upgrade')
    .itemInputs(['2x gtceu:aluminium_plate', '4x gtceu:mv_electric_piston', '2x gtceu:copper_single_cable'])
    .itemOutputs('sophisticatedbackpacks:compacting_upgrade')
    .duration(500)
    .EUt(128)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_compacting_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:compacting_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_compacting_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:void_upgrade')
    .itemInputs(['gtceu:ender_pearl_plate', '3x gtceu:obsidian_plate', '2x gtceu:aluminium_plate', '2x gtceu:copper_single_cable'])
    .inputFluids(Fluid.of('minecraft:lava', 1000))
    .itemOutputs('sophisticatedbackpacks:void_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_void_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:void_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_void_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:restock_upgrade')
    .itemInputs('gtceu:mv_robot_arm', '2x gtceu:aluminium_plate', 'gtceu:item_filter', '3x gtceu:copper_single_cable')
    .itemOutputs('sophisticatedbackpacks:restock_upgrade')
    .duration(200)
    .EUt(128)
    .circuit(2)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_restock_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:restock_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_restock_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:deposit_upgrade')
    .itemInputs('gtceu:mv_robot_arm', '2x gtceu:aluminium_plate', 'gtceu:item_filter', '3x gtceu:copper_single_cable')
    .itemOutputs('sophisticatedbackpacks:deposit_upgrade')
    .duration(200)
    .EUt(128)
    .circuit(3)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_deposit_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:deposit_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_restock_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:refill_upgrade')
    .itemInputs('gtceu:mv_robot_arm', '2x gtceu:aluminium_plate', 'gtceu:ender_eye_plate', 'gtceu:item_filter', '3x gtceu:copper_single_cable')
    .itemOutputs('sophisticatedbackpacks:refill_upgrade')
    .duration(200)
    .EUt(128)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:advanced_refill_upgrade')
    .itemInputs(['gtceu:hv_robot_arm', '2x gtceu:stainless_steel_plate', 'sophisticatedbackpacks:refill_upgrade', '3x gtceu:gold_single_cable'])
    .itemOutputs('sophisticatedbackpacks:advanced_refill_upgrade')
    .duration(500)
    .EUt(512)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:inception_upgrade')
    .itemInputs(['4x gtceu:tungsten_steel_plate', '3x gtceu:ender_eye_plate', 'minecraft:nether_star'])
    .itemOutputs('sophisticatedbackpacks:inception_upgrade')
    .duration(500)
    .EUt(8192)
    .circuit(0)
  event.recipes.gtceu.assembler('sophisticatedbackpacks:everlasting_upgrade')
    .itemInputs(['4x gtceu:tungsten_steel_plate', '3x gtceu:ender_eye_plate', 'minecraft:nether_star'])
    .itemOutputs('sophisticatedbackpacks:everlasting_upgrade')
    .duration(500)
    .EUt(8192)
    .circuit(1)
  
})