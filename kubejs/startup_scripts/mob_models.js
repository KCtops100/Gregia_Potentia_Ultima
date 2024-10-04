// https://wiki.latvian.dev/books/kubejs/page/custom-items
StartupEvents.registry('item', e => {
    const mobs = [
        'blaze',
        'chicken',
        'cow',
        'creeper',
        'drowned',
        'elder_guardian',
        'ender_dragon',
        'enderman',
        'evoker',
        'ghast',
        'guardian',
        'iron_golem',
        'magma_cube',
        'mooshroom',
        'piglin',
        'rabbit',
        'sheep',
        'skeleton',
        'spider',
        'squid',
        'wither_skeleton',
        'zombie'
    ];
    mobs.forEach(mob => {
        e.create(`${mob}_cognitive_matrix`);
    });
    e.create('neuromold').displayName('Neuro Mold');
    e.create('terra_matter').displayName('Terra Matter');
    e.create('inferno_matter').displayName('Inferno Matter');
    e.create('void_matter').displayName('Void Matter');
});
