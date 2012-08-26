//- JavaScript source code

//- main.js ~~
//                                              ~~ (c) SRW and BCH, 09 Aug 2012
//                                                  ~~ last updated 25 Aug 2012

sentence({
    format: 'Red blood cells are {x y}. ',
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
    format: 'Red blood cells show {x y z}. ',
    x: ordinal({
        long_name:  'anisopoikilocytosis',
        short_name: 'APK',
        states:     [undefined, 'mild', 'moderate', 'severe']
    }),
    y: ordinal({
        long_name:  'anisocytosis',
        short_name: 'aniso',
        states:     [undefined, 'mild', 'moderate', 'severe']
    }),
    z: ordinal({
        long_name:  'poikilocytosis',
        short_name: 'poikilo',
        states:     [undefined, 'mild', 'moderate', 'severe']
    })
});

sentence({
    format: '{a b c d e f g h i} are present. ',
    a: ordinal({
        long_name:  'acanthocytes',
        short_name: 'acantho',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    b: ordinal({
        long_name:  'dacrocytes',
        short_name: 'dacro',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'echinocytes',
        short_name: 'echino',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'elliptocytes',
        short_name: 'ellipto',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    e: ordinal({
        long_name:  'polychromatic cells',
        short_name: 'polychrom',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    f: ordinal({
        long_name:  'schistocytes',
        short_name: 'schisto',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    g: ordinal({
        long_name:  'spherocytes',
        short_name: 'sphero',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    h: ordinal({
        long_name:  'stomatocytes',
        short_name: 'stomato',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    i: ordinal({
        long_name:  'target cells',
        short_name: 'target',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    })
});
sentence({
    format: '{a b c d} are noted. ',
    a: ordinal({
        long_name:  'red blood cells with basophilic stippling',
        short_name: 'basophilic stippling',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    b: ordinal({
        long_name:  'nucleated red blood cells',
        short_name: 'nucleated RBCs',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'polychromatic cells',
        short_name: 'polychromatic',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'RBCs with Howell-Jolly bodies',
        short_name: 'Howell-Jolly bodies',
        states: [
            undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
        ]
    })
});

sentence({
    format: '{a} is present. ',
    a: ordinal({
        long_name:  'rouleaux formation',
        short_name: 'rouleaux',
        states: [
            undefined, ''
        ]
    })
});

sentence({
    format: 'White blood cells are {b d f} and consist predominantly of {g}. ',
    b: ordinal({
        long_name:  'within normal limits',
        short_name: 'normal',
        states: [
            undefined, ''
        ]
    }),
    d: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states: [
            undefined, '', 'mildly', 'markedly'
        ]
    }),
    f: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states: [
            undefined, '', 'mildly', 'markedly'
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
    format: '{m n} are identified. ',
    m: ordinal({
        long_name:  'Sezary-like cells',
        short_name: 'Sezary',
        states: [
            undefined, 'no', 'rare', 'a few', 'several'
        ]
    }),
    n: ordinal({
        long_name:  'circulating blasts',
        short_name: 'blasts',
        states: [
            undefined, 'no', 'rare', 'a few', 'several'
        ]
    })
});

sentence({
    format: 'Neutrophils are {m n o} with {a c b d}. ',
    m: ordinal({
        long_name:  'present',
        short_name: 'present',
        states: [
            undefined, ''
        ]
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: 'increased',
        states: [
            undefined, 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: 'decreased',
        states: [
            undefined, 'mildly', 'markedly'
        ]
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology',
        states: [
            undefined, ''
        ]
    }),
    b: ordinal({
        long_name:  'neutrophils with hypersegmented nuclei',
        short_name: 'hypersegmented',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'toxic changes',
        short_name: 'toxic',
        states: [
            undefined, '', 'mild', 'moderate', 'severe'
        ]
    }),
    d: ordinal({
        long_name:  'band forms',
        short_name: 'bands',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

sentence({
    format: 'Lymphocytes are {m n o} with {a b c}. ',
    m: ordinal({
        long_name:  'present',
        short_name: 'present',
        states: [
            undefined, ''
        ]
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: 'increased',
        states: [
            undefined, 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: 'decreased',
        states: [
            undefined, 'mildly', 'markedly'
        ]
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology',
        states: [
            undefined, ''
        ]
    }),
    b: ordinal({
        long_name:  'large granular lymphocytes',
        short_name: 'LGL',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'activated forms',
        short_name: 'activated',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

sentence({
    format: 'Monocytes are {m n} with {x y}. ',
    m: ordinal({
        long_name:  'present but not increased',
        short_name: 'present',
        states: [
            undefined, ''
        ]
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: 'increased',
        states: [
            undefined, 'relatively', 'mildly', 'markedly'
        ]
    }),
    x: ordinal({
        long_name:  'mature morphology',
        short_name: 'mature',
        states: [
            undefined, '', '', ''
        ]
    })
});

sentence({
    format: 'Platelets are {m n o} with {a b c d}. ',
    m: ordinal({
        long_name:  'within normal limits',
        short_name: 'WNL',
        states: [
            undefined, ''
        ]
    }),
    n: ordinal({
        long_name:  'increased in number',
        short_name: String.fromCharCode(8593),
        states: [
            undefined, '', 'mildly', 'markedly'
        ]
    }),
    o: ordinal({
        long_name:  'decreased in number',
        short_name: 'decreased',
        states: [
            undefined, '', 'mildly', 'markedly'
        ]
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable morphology',
        states: [
            undefined, ''
        ]
    }),
    b: ordinal({
        long_name:  'large forms',
        short_name: 'large',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    c: ordinal({
        long_name:  'giant platelets',
        short_name: 'giant',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    }),
    d: ordinal({
        long_name:  'platelet clumps',
        short_name: 'clumps',
        states: [
            undefined, 'rare', 'a few', 'occasional', 'several'
        ]
    })
});

//- vim:set syntax=javascript:
