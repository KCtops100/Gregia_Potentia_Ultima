ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:silk_touch_upgrade' })
    event.recipes.gtceu.assembler('refinedstorage:silk_touch_upgrade')
        .itemInputs(
            'refinedstorage:upgrade'
        )
        .itemOutputs(
            'refinedstorage:silk_touch_upgrade'
        )
        .duration(20)
        .EUt(32)
        .circuit(0)
})  // ['refinedstorage:silk_touch_upgrade', 'refinedstorage:upgrade']