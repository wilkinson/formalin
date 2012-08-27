//- JavaScript source code

//- main.js ~~
//                                              ~~ (c) SRW and BCH, 09 Aug 2012
//                                                  ~~ last updated 27 Aug 2012

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
        short_name: String.fromCharCode(8593),
        states: [
            off, 'mildly', 'markedly'
        ]
    }),
    f: ordinal({
        long_name:  'decreased',
        short_name: String.fromCharCode(8595),
        states: [
            off, 'mildly', 'markedly'
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
        long_name:  'Sezary-like cells',
        short_name: 'Sezary',
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
        short_name: String.fromCharCode(8593),
        states: [
            off, 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: String.fromCharCode(8595),
        states: [
            off, 'mildly', 'markedly'
        ]
    }),
    a: binary({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology'
    }),
    b: ordinal({
        long_name:  'neutrophils with hypersegmented nuclei',
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
        short_name: String.fromCharCode(8593),
        states: [
            off, 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: String.fromCharCode(8595),
        states: [
            off, 'mildly', 'markedly'
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
    format: 'Monocytes are {m n} with {x}.',
    m: binary({
        long_name:  'present but not increased',
        short_name: 'present'
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: String.fromCharCode(8593),
        states: [
            off, 'relatively', 'mildly', 'markedly'
        ]
    }),
    x: binary({
        long_name:  'mature morphology',
        short_name: 'mature'
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
        short_name: String.fromCharCode(8593),
        states: [
            off, 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: String.fromCharCode(8595),
        states: [
            off, 'mildly', 'markedly'
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

//- vim:set syntax=javascript:
