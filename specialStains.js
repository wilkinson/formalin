//- JavaScript source code

//- specialStains.js ~~
//
//  This template was pulled from the GitHub repository at
//      https://github.com/benchill/hpath .
//
//  Its original author is Ben C. Hill, M.D.
//
//                                          ~~ last updated by SRW, 08 Oct 2012

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
        short_name: 'increased',
        states:     [off, 'mildly', 'moderately', 'severely']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
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
        short_name: 'ringed sideroblast',
        states: [
            off, 'no', 'rare', 'a few', 'scattered', 'occasional', 'several'
        ]
    })
});

//- vim:set syntax=javascript:
