ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:storage_housing' })
    event.recipes.gtceu.assembler('refinedstorage:storage_housing')
        .itemInputs(
            '3x gtceu:steel_ingot',
            '3x gtceu:redstone_plate',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'refinedstorage:storage_housing'
        )
        .duration(20)
        .EUt(32)
})