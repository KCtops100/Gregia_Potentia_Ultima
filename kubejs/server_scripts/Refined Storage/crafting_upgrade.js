ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:crafting_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:crafting_upgrade')
        .itemInputs(
            'kubejs:refined_construction_core', '5x gtceu:steel_plate', 'refinedstorage:upgrade',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            'refinedstorage:crafting_upgrade'
        )
        .duration(20)
        .EUt(32)
})