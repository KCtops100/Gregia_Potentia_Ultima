ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:fortune_1_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:fortune_1_upgrade')
        .itemInputs(
            'refinedstorage:upgrade'
        )
        .itemOutputs(
            'refinedstorage:fortune_1_upgrade'
        )
        .duration(20)
        .EUt(32)
        .circuit(1)
})