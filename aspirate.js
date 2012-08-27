//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 09 Aug 2012

sentence({
    format: 'Aspirate is {u v w} with {x y z}.',
    u: ordinal({
        long_name:  'made up of cellular particles',
        short_name: 'cellular particles',
        states:     [undefined, '']
    }),
    v: ordinal({
        long_name:  'paucicellular',
        short_name: 'paucicellular',
        states:     [undefined, '']
    }),
    w: ordinal({
        long_name:  'pauciparticulate',
        short_name: 'pauciparticulate',
        states:     [undefined, '']
    }),
    x: ordinal({
        long_name:  'trilineage hematopoeisis',
        short_name: 'TLH',
        states:     [undefined, '']
    }),
    y: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [undefined, 'a mildly increased number of','a significantly increased number of']
    }),
    z: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:      [undefined, 'a mildly increased number of','a significantly increased number of']
    })
});

sentence({
    format: 'The cellular elements are {u v} made up of {w x}.',
    u: ordinal({
        long_name:  'predominantly',
        short_name: 'predominantly',
        states:     [undefined, '']
    }),
    v: ordinal({
        long_name:  'exclusively',
        short_name: 'exclusively',
        states:     [undefined, '']
    }),
    w: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [undefined, '']
    }),
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [undefined, '']
    })
});

sentence({
    format: 'Erythropoiesis and myelopoiesis are {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [undefined, '']
    }),  
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [undefined, '','mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [undefined,'', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states:     [undefined, 'with','with sequential', 'with a normal progressive pattern of']
    })
});

sentence({
    format: 'Erythropoiesis is {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [undefined, '']
    }),  
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [undefined, '','mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [undefined,'', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states:     [undefined, 'with','with sequential','with a normal progressive pattern of']
    }),
z: ordinal({
        long_name:  'megaloblastic changes',
        short_name: 'megaloblastic',
        states:     [undefined, 'with', 'with mild', 'with marked']
    })
});

sentence({
    format: 'Myelopoiesis is {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [undefined, '']
    }),  
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [undefined, '','mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [undefined,'', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states:     [undefined, 'with','with sequential', 'with a normal progressive pattern of']
    })
});

sentence({
    format: 'Megakarocytes are {x y} with {z a b}.',
    x: ordinal({
        long_name:  'increased in number',
        short_name: 'increased',
        states:     [undefined, '','mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased in number',
        short_name: 'decreased',
        states:     [undefined,'', 'mildly', 'markedly']
    }),
        y: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [undefined,'']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states:     [undefined,'']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [undefined, '']
    }),
    b: ordinal({
        long_name:  'hypolobated forms',
        short_name: 'hypolobated',
        states:     [undefined, 'rare', 'few', 'scattered', 'occasional','several']
    }),
    b: ordinal({
        long_name:  'immature forms',
        short_name: 'immature',
        states:     [undefined, 'rare', 'few', 'scattered', 'occasional','several']
    })
});

sentence({
    format: '{x} with {a b} are noted.',
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [undefined, 'rare', 'few', 'scattered', 'occasional','several']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [undefined, '']
    }),
    b: ordinal({
        long_name:  'atypical features',
        short_name: 'atypical features',
        states:     [undefined, 'rare', 'few', 'scattered', 'occasional','several']
    })
});

sentence({
    format: 'There is {x} dysplasia.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [undefined, '']
    })
});

sentence({
    format: 'There is no {x}.',
    x: ordinal({
        long_name:  'increase in blasts',
        short_name: 'blasts',
        states:     [undefined, '']
    })
});

sentence({
    format: 'No {x} are noted.',
    x: ordinal({
        long_name:  'lymphoid aggregates',
        short_name: 'lymphoid aggregates',
        states:     [undefined, '']
    })
});

sentence({
    format: 'Touch imprint {x y}.',
    x: ordinal({
        long_name:  'shows similar findings',
        short_name: 'similar findings',
        states:     [undefined, '']
    }),
    y: ordinal({
        long_name:  'is paucicellular and inadequate for further evaluation',
        short_name: 'paucicellular',
        states:     [undefined, '']
    })
});

//- vim:set syntax=javascript:
