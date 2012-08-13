//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 09 Aug 2012

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
    format: '{a b c d e f g h i} are present.',
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

//- vim:set syntax=javascript:
