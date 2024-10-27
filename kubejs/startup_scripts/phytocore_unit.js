GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('plant_growing')
        .category('reconstruction')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)   // 3 input slots, 1 output slot
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// Machines
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('phyto_core_unit', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .langValue("PhytoCore Unit")
        .recipeType('plant_growing', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/replicator')
})

StartupEvents.registry('item', e => {
    e.create('nutrient_rich_soil_conditioner').displayName('Nutrient-Rich Soil Conditioner');
    e.create('enhanced_nutrient_rich_soil_conditioner').displayName('Enhanced Nutrient-Rich Soil Conditioner');
    e.create('superior_nutrient_rich_soil_conditioner').displayName('Superior Nutrient-Rich Soil Conditioner');
});