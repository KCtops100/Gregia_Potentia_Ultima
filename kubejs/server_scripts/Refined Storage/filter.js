ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:filter' })
    event.recipes.gtceu.assembler('refinedstorage:filter')
        .itemInputs(
            'gtceu:steel_plate',
            '4x gtceu:zinc_foil',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'refinedstorage:filter'
        )
        .duration(20)
        .EUt(32)
})