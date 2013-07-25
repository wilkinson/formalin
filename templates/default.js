//- Formalin template

//- default.js ~~
//                                              ~~ (c) SRW and BCH, 09 Aug 2012
//                                                  ~~ last updated 24 Jul 2013

section('Peripheral Smear');

sentence({
    format: 'Red blood cells are {x y}.',
    x: categorical([
        {
            long_name:  'microcytic',
            short_name: 'microcytic'
        },
        {
            long_name:  'normocytic',
            short_name: 'normocytic'
        },
        {
            long_name:  'macrocytic',
            short_name: 'macrocytic'
        }
    ]),
    y: categorical([
        {
            long_name:  'hypochromic',
            short_name: 'hypochromic'
        },
        {
            long_name:  'normochromic',
            short_name: 'normochromic'
        },
        {
            long_name:  'hyperchromic',
            short_name: 'hyperchromic'
        }
    ])
});

sentence({
    format: 'Red blood cells show {x y z}.',
    x: ordinal({
        long_name:  'anisopoikilocytosis',
        short_name: 'APK',
        states:     [off, 'mild', 'moderate', 'severe']
    }),
    y: ordinal({
        long_name:  'anisocytosis',
        short_name: 'aniso',
        states:     [off, 'mild', 'moderate', 'severe']
    }),
    z: ordinal({
        long_name:  'poikilocytosis',
        short_name: 'poikilo',
        states:     [off, 'mild', 'moderate', 'severe']
    })
});

sentence({
    format: '{a b c d e f g h i} are present.',
    a: ordinal({
        long_name:  'acanthocytes',
        short_name: 'acantho',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    b: ordinal({
        long_name:  'dacrocytes',
        short_name: 'dacro',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'echinocytes',
        short_name: 'echino',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'elliptocytes',
        short_name: 'ellipto',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    e: ordinal({
        long_name:  'polychromatic cells',
        short_name: 'polychrom',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    f: ordinal({
        long_name:  'schistocytes',
        short_name: 'schisto',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    g: ordinal({
        long_name:  'spherocytes',
        short_name: 'sphero',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    h: ordinal({
        long_name:  'stomatocytes',
        short_name: 'stomato',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    i: ordinal({
        long_name:  'target cells',
        short_name: 'target',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    })
});

sentence({
    format: '{a b c d} are noted.',
    a: ordinal({
        long_name:  'red blood cells with basophilic stippling',
        short_name: 'basophilic stippling',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    b: ordinal({
        long_name:  'nucleated red blood cells',
        short_name: 'nucleated RBCs',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'polychromatic cells',
        short_name: 'polychromatic',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'RBCs with Howell-Jolly bodies',
        short_name: 'Howell-Jolly bodies',
        states: [
            off, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    })
});

sentence({
    format: '{a} is present.',
    a: binary({
        long_name:  'rouleaux formation',
        short_name: 'rouleaux'
    })
});

sentence({
    format: 'White blood cells are {b d f} and consist predominantly of {g}.',
    b: binary({
        long_name:  'within normal limits',
        short_name: 'normal'
    }),
    d: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    f: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    g: categorical([
        {
            long_name:  'neutrophils',
            short_name: 'neutrophils'
        },
        {
            long_name:  'lymphocytes',
            short_name: 'lymphocytes'
        },
        {
            long_name:  'blasts',
            short_name: 'blasts'
        }
    ])
});

sentence({
    format: '{m n} are identified.',
    m: ordinal({
        long_name:  'S\u00e9zary-like cells',
        short_name: 'S\u00e9zary',
        states: [
            off, 'no', 'rare', 'a few', 'several'
        ]
    }),
    n: ordinal({
        long_name:  'circulating blasts',
        short_name: 'blasts',
        states: [
            off, 'no', 'rare', 'a few', 'several'
        ]
    })
});

sentence({
    format: 'Neutrophils are {m n o} with {a c b d}.',
    m: binary({
        long_name:  'present',
        short_name: 'present'
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: symbol('down arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    a: binary({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology'
    }),
    b: ordinal({
        long_name:  'instances of hypersegmented nuclei',
        short_name: 'hypersegmented',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'toxic changes',
        short_name: 'toxic',
        states: [
            off, 'mild', 'moderate', 'severe'
        ]
    }),
    d: ordinal({
        long_name:  'band forms',
        short_name: 'bands',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

sentence({
    format: 'Lymphocytes are {m n o} with {a b c}.',
    m: binary({
        long_name:  'present',
        short_name: 'present'
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: symbol('down arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    a: binary({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology'
    }),
    b: ordinal({
        long_name:  'large granular lymphocytes',
        short_name: 'LGL',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'activated forms',
        short_name: 'activated',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

sentence({
    format: 'Monocytes {x} are {m n}.',
    m: binary({
        long_name:  'present but not increased',
        short_name: 'present'
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states: [
            off, 'relatively', 'mildly', 'markedly'
        ]
    }),
    x: binary({
        long_name:  'with mature morphology',
        short_name: 'with mature morphology'
    })
});

sentence({
    format: 'Platelets are {m n o} with {a b c d}.',
    m: binary({
        long_name:  'within normal limits',
        short_name: 'WNL'
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: symbol('down arrow'),
        states: [
            off, 'mildly', '', 'markedly'
        ]
    }),
    a: binary({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology'
    }),
    b: ordinal({
        long_name:  'large forms',
        short_name: 'large',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'giant platelets',
        short_name: 'giant',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'platelet clumps',
        short_name: 'clumps',
        states: [
            off, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

textbox('Notes');

//- aspirate.js ~~
//
//  This template was pulled from the GitHub repository at
//      https://github.com/benchill/hpath .
//
//  Its original author is Ben C. Hill, M.D.
//
//                                          ~~ last updated by SRW, 23 Oct 2012

section('Aspirate');

sentence({
    format: 'The aspirate is {u v} with {x y z}.',
    u: categorical([
        {
            long_name:  'cellular',
            short_name: 'cellular'
        },
        {
            long_name:  'paucicellular',
            short_name: 'paucicellular'
        }
    ]),
    v: categorical([
        {
            long_name:  'and particulate',
            short_name: 'particulate'
        },
        {
            long_name:  'and pauciparticulate',
            short_name: 'pauciparticulate'
        }
    ]),
    x: ordinal({
        long_name:  'trilineage hematopoeisis',
        short_name: 'TLH',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states: [
            off,
            'a mildly increased number of',
            'a significantly increased number of'
        ]
    }),
    z: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states: [
            off,
            'a mildly increased number of',
            'a significantly increased number of'
        ]
    })
});

sentence({
    format: 'The cellular elements are {u v} made up of {w x}.',
    u: ordinal({
        long_name:  'predominantly',
        short_name: 'predominantly',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'exclusively',
        short_name: 'exclusively',
        states:     [off, '']
    }),
    w: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, '']
    })
});

sentence({
    format: 'Erythropoiesis and myelopoiesis are {w x y} and demonstrate {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ])
});

sentence({
    format: 'The erythyroid lineage is {w x y} {z a b}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ]),
    a: ordinal({
        long_name:  'megaloblastic features',
        short_name: 'megaloblastic',
        states: [off, 'with', 'with mild', 'with marked']
    }),
    b: ordinal({
        long_name:  'binucleated forms',
        short_name: 'binucleated forms',
        states: [off, 'with', 'with few', 'with several']
    })
});

sentence({
    format: 'Myelopoiesis is {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ])
});

sentence({
    format: 'Megakarocytes are {x y y2} with {z a b c}.',
    x: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y2: ordinal({
        long_name:  'decreased in number',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ]),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [off, '']
    }),
    b: ordinal({
        long_name:  'hypolobated forms',
        short_name: 'hypolobated',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    }),
    c: ordinal({
        long_name:  'immature forms',
        short_name: 'immature',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    })
});

sentence({
    format: '{x} with {a b} are noted.',
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [off, '']
    }),
    b: ordinal({
        long_name:  'atypical features',
        short_name: 'atypical features',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    })
});

sentence({
    format: 'There is {x} dysplasia or increase in blasts.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [off, '']
    })
});


sentence({
    format: 'There is {x} dysplasia.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [off, '']
    })
});

sentence({
    format: 'There is no {x}.',
    x: ordinal({
        long_name:  'increase in blasts',
        short_name: 'blasts',
        states:     [off, '']
    })
});

sentence({
    format: 'No {x} are noted.',
    x: ordinal({
        long_name:  'lymphoid aggregates',
        short_name: 'lymphoid aggregates',
        states:     [off, '']
    })
});

sentence({
    format: 'Touch imprint {x}.',
    x: categorical([
        {
            long_name:  'shows similar findings',
            short_name: 'similar findings'
        },
        {
            long_name:  'is paucicellular and inadequate for further evaluation',
            short_name: 'paucicellular'
        }
    ])
});

//- boneMarrow.js ~~
//
//  This template was pulled from the GitHub repository at
//      https://github.com/benchill/hpath .
//
//  Its original author is Ben C. Hill, M.D.
//
//                                          ~~ last updated by SRW, 20 Jul 2013

textbox('Notes');

section('Bone Marrow');

sentence({
    format: '{u} procedure was performed.',
    u: ordinal({
        long_name:  'Decalcification',
        short_name: 'Decalcification',
        states:     [off, '']
    })
});

sentence({
    format: 'The biopsy was obtained from the {u v} posterior iliac crest and measures {w x} cm in maximum gross dimension.',
    u: ordinal({
        long_name:  'right',
        short_name: 'right',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'left',
        short_name: 'left',
        states:     [off, '']
    }),
    w: number({
        min: 0,
        max: 6,
        step: 0.1,
        value: 1.0
    }),
    x: number({
        min: 0,
        max: 6,
        step: 0.1,
        value: 1
    })
});

sentence({
    format: 'The biopsy specimen is {u u2 u3 v}.',
    u: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [off, '']
    }),
    u2: ordinal({
        long_name:  'is fragmented',
        short_name: 'fragmented',
        states:     [off, '']
    }),
    u3: ordinal({
        long_name:  'displays crush artifact',
        short_name: 'crush artifact',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'is inadequate for interpretation',
        short_name: 'inadequate',
        states:     [off, '']
    })
});

sentence({
    format: 'The biopsy shows {u a} marrow ' +
                '({b}% to {e}%) {x y z}.',
    u: categorical([
        {
            long_name:  'normocellular',
            short_name: 'normocellular'
        },
        {
            long_name:  'hypocellular',
            short_name: 'hypocellular'
        },
        {
            long_name:  'hypercellular',
            short_name: 'hypercellular'
        }
    ]),
    a: ordinal({
        long_name:  'variably cellular',
        short_name: 'variably cellular',
        states:     [off, '', 'slightly', 'markedly']
    }),
    b: number({
        min: 0,
        max: 100,
        step: 5,
        value: 40
    }),
    e: number({
        min: 0,
        max: 100,
        step: 5,
        value: 40
    }),
    x: ordinal({
        long_name:  'with trilineage hematopoeisis',
        short_name: 'TLH',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states: [
            off,
            'with a mildly increased number of',
            'with a markedly increased number of',
            'consisting predominantly of'
        ]
    }),
    z: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states: [
            off,
            'a mildly increased number of',
            'a significantly increased number of',
            'consisting predominantly of'
        ]
    })
});

sentence({
    format: 'The cellular elements are {u v} made up of {w x}.',
    u: ordinal({
        long_name:  'predominantly',
        short_name: 'predominantly',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'exclusively',
        short_name: 'exclusively',
        states:     [off, '']
    }),
    w: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, '']
    })
});

sentence({
    format: 'Erythropoiesis and myelopoiesis are {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ])
});

sentence({
    format: 'Erythropoiesis is {w x y} {z a}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ]),
    a: ordinal({
        long_name:  'megaloblastic changes',
        short_name: 'megaloblastic',
        states:     [off, 'with', 'with mild', 'with marked']
    })
});

sentence({
    format: 'Myelopoiesis is {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ])
});

sentence({
    format: 'Megakarocytes are {x y y2} with {z a b c}.',
    x: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'increased in number',
        short_name: symbol('up arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    y2: ordinal({
        long_name:  'decreased in number',
        short_name: symbol('down arrow'),
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: categorical([
        {
            long_name:  'normal maturation',
            short_name: 'normal maturation'
        },
        {
            long_name:  'a left shift',
            short_name: 'left shift'
        }
    ]),
    a: binary({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable'
    }),
    b: ordinal({
        long_name:  'hypolobated forms',
        short_name: 'hypolobated',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    }),
    c: ordinal({
        long_name:  'immature forms',
        short_name: 'immature',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    })
});

sentence({
    format: '{x} with {a b c} are noted.',
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, 'rare', 'scattered', 'several', 'numerous']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [off, '']
    }),
    b: ordinal({
        long_name:  'atypical features',
        short_name: 'atypical features',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'prominent']
    }),
    c: ordinal({
        long_name:  'plasma cell aggregates',
        short_name: 'aggregates',
        states: [
            off, 'no', 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    })
});

sentence({
    format: 'The marrow contains {x y}.',
    x: ordinal({
        long_name:  'stromal damage',
        short_name: 'stromal damage',
        states:     [off, 'mild', 'moderate', 'severe']
    }),
    y: ordinal({
        long_name:  'fibrosis',
        short_name: 'fibrosis',
        states:     [off, 'mild', 'moderate', 'severe']
    })
});

sentence({
    format: 'There is {x} dysplasia or increase in blasts.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [off, '']
    })
});

sentence({
    format: 'There is {x} dysplasia.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [off, '']
    })
});

sentence({
    format: 'There is no {x}.',
    x: ordinal({
        long_name:  'increase in blasts',
        short_name: 'blasts',
        states:     [off, '']
    })
});

sentence({
    format: '{x} are noted.',
    x: ordinal({
        long_name:  'lymphoid aggregates',
        short_name: 'lymphoid aggregates',
        states: [
            off, 'no', 'rare', 'a few', 'scattered', 'occasional', 'several'
        ]
    })
});

textbox('Notes');

//- specialStains.js ~~
//
//  This template was pulled from the GitHub repository at
//      https://github.com/benchill/hpath .
//
//  Its original author is Ben C. Hill, M.D.
//
//                                          ~~ last updated by SRW, 23 Oct 2012

section('Special Stains');

sentence({
    format: 'Stainable iron is {w x y z}.',
    w: ordinal({
        long_name:  'absent',
        short_name: 'absent',
        states:     [off, '', 'virtually']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: symbol('up arrow'),
        states:     [off, 'mildly', 'moderately', 'severely']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: symbol('down arrow'),
        states:     [off, 'mildly', 'moderately', 'severely']
    }),
    z: ordinal({
        long_name:  'present',
        short_name: 'present',
        states:     [off, '']
    })
});

sentence({
    format: '{a} are identified.',
    a: ordinal({
        long_name:  'ringed sideroblasts',
        short_name: 'ringed sideroblasts',
        states: [
            off, 'no', 'rare', 'a few', 'scattered', 'occasional', 'several'
        ]
    })
});

textbox('Notes');

section('Diagnosis');

textbox('');

//- vim:set syntax=javascript:
