ServerEvents.recipes(event => {
    event.remove({output: 'buildinggadgets2:template_manager'})
    event.shaped(
        Item.of('buildinggadgets2:template_manager', 1),
        [
            'SHS',
            'STS',
            'SVS'
        ],
        {
            S:  'gtceu:stainless_steel_plate',
            H:  'gtceu:hv_emitter',
            T:  'gtceu:stainless_steel_gearbox',
            V:  '#gtceu:circuits/hv'
        }
    )
})