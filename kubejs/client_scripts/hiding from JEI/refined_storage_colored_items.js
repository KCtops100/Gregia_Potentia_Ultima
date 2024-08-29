JEIEvents.hideItems((event) => {
    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
        'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ];

    colors.forEach((color) => {
        event.hide(`refinedstorage:${color}_controller`);
        event.hide(`refinedstorage:${color}_creative_controller`);
        event.hide(`refinedstorage:${color}_grid`);
        event.hide(`refinedstorage:${color}_crafting_grid`);
        event.hide(`refinedstorage:${color}_pattern_grid`);
        event.hide(`refinedstorage:${color}_fluid_grid`);
        event.hide(`refinedstorage:${color}_network_receiver`);
        event.hide(`refinedstorage:${color}_network_transmitter`);
        event.hide(`refinedstorage:${color}_relay`);
        event.hide(`refinedstorage:${color}_detector`);
        event.hide(`refinedstorage:${color}_security_manager`);
        event.hide(`refinedstorage:${color}_wireless_transmitter`);
        event.hide(`refinedstorage:${color}_disk_manipulator`);
        event.hide(`refinedstorage:${color}_crafter`);
        event.hide(`refinedstorage:${color}_crafter_manager`);
        event.hide(`refinedstorage:${color}_crafting_monitor`);
    });
});
