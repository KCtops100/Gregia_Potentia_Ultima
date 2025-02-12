// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('loot_fabrication')
//         .category('reconstruction')
//         .setEUIO('in')
//         .setMaxIOSize(3, 2, 0, 0)   // 3 input slots, 1 output slot
//         .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.ELECTROLYZER)
// })

// // Machines
// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     let machine = event.create('neural_network_fabricator', 'simple')
//         .langValue("Neural Network Fabricator")
//         .recipeType('loot_fabrication', true, true)
//         .workableTieredHullRenderer('gtceu:block/machines/replicator');

//     // Manually set the tiers, if necessary
//     machine.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV);
// });
