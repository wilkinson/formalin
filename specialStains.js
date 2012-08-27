//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 09 Aug 2012


sentence({
    format: 'Stainable iron is {w x y z}.',
    w: ordinal({
        long_name:  'absent',
        short_name: 'absent',
        states:     [undefined, '', 'virtually']
    }),       
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [undefined, 'mildly', 'moderately', 'severely']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [undefined, 'mildly', 'moderately', 'severely']
    }),
    z: ordinal({
        long_name:  'present',
        short_name: 'present',
        states:     [undefined, '']
    })
});

sentence({
    format: '{a} are identified.',
    a: ordinal({
        long_name:  'ringed sideroblasts',
        short_name: 'ringed sideroblast',
        states: [
            undefined, 'no', 'rare', 'a few', 'scattered', 'occasional', 'several'
        ]
    })
});

//- vim:set syntax=javascript:
