ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:relay' })
    event.recipes.gtceu.assembler('refinedstorage:relay')
        .itemInputs(
            'gtceu:lv_machine_hull',
            '#gtceu:circuits/lv',
            '2x refinedstorage:cable'
        )
        .itemOutputs(
            'refinedstorage:relay'
        )
        .duration(20)
        .EUt(32)
})