ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:detector' })
    event.recipes.gtceu.assembler('refinedstorage:detector')
        .itemInputs(
            'refinedstorage:refined_improved_processor',
            'gtceu:lv_machine_hull',
            'gtceu:lv_sensor',
            '2x #gtceu:circuits/lv',
        )
        .itemOutputs(
            'refinedstorage:detector'
        )
        .duration(20)
        .EUt(32)
})