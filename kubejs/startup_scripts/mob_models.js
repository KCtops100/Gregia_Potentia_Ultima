// https://wiki.latvian.dev/books/kubejs/page/custom-items
StartupEvents.registry('item', e => {
    const mobs = [
        'zombie',
        'skeleton',
        'creeper',
        'enderman',
        'spider',
    ];
    mobs.forEach(mob => {
        e.create(`${mob}_cognitive_matrix`);
    });
    e.create('neuromold').displayName('Neuro Mold');
    e.create('terra_matter').displayName('Terra Matter');
    e.create('inferno_matter').displayName('Void Matter');
});
