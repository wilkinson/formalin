//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 09 Aug 2012

sentence({
    format: 'A {u} procedure was performed.',
    u: ordinal({
        long_name:  'decalcification',
        short_name: 'decalcification',
        states:     [undefined, '']
    })    
});

sentence({
    format: 'The biopsy was obtained from {u v} posterior iliac crest and measures {w}.{x} cm in maximum gross dimension.',
    u: ordinal({
        long_name:  'right',
        short_name: 'right',
        states:     [undefined, '']
    }),
    v: ordinal({
        long_name:  'left',
        short_name: 'left',
        states:     [undefined, '', 'slightly','markedly']
    }),
    w: ordinal({
        long_name:  '',
        short_name: 'X',
        states:     [undefined, '0','1','2','3','4','5']
    }),
    x: ordinal({
        long_name:  '',
        short_name: 'X',
        states:    [undefined, '0','1','2','3','4','5','6','7','8','9']
    })     
    
});

sentence({
    format: 'The biopsy specimen is {u v}.',
    u: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [undefined, '']
    }),
    v: ordinal({
        long_name:  'inadequate for interpretation',
        short_name: 'inadequate',
        states:     [undefined, '']
    })
});

sentence({
    format: 'The biopsy shows {u v w a} marrow ({b}{c} % {d} {e}{f}) {x y z}.',
    u: ordinal({
        long_name:  'normocellular',
        short_name: 'normocellular',
        states:     [undefined, '']
    }),
    v: ordinal({
        long_name:  'hypocellular',
        short_name: 'hypocellular',
        states:     [undefined, '', 'slightly','markedly']
    }),
    w: ordinal({
        long_name:  'hypercellular',
        short_name: 'hypercellular',
        states:     [undefined, '','slightly','markedly']
    }),
    a: ordinal({
        long_name:  'variably cellular',
        short_name: 'variably cellular',
        states:     [undefined, '','slightly','markedly']
    }),
    b: ordinal({
        long_name:  '',
        short_name: 'X',
        states:    [undefined,'1','2','3','4','5','6','7','8','9']
    }),  
    c: ordinal({
        long_name:  '',
        short_name: 'X',
        states:    [undefined, '0','5']
    }), 
    d: ordinal({
        long_name:  'to',
        short_name: 'to',
        states:    [undefined,'']
    }), 
    e: ordinal({
        long_name:  '',
        short_name: 'X',
        states:    [undefined,'1','2','3','4','5','6','7','8','9']
    }),   
    f: ordinal({
        long_name:  '%',
        short_name: 'X',
        states:    [undefined, '0','5']
    }),                
    x: ordinal({
        long_name:  ' with trilineage hematopoeisis',
        short_name: 'TLH',
        states:     [undefined, '']
    }),
    y: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [undefined, ' with a mildly increased number of',' with a markedly increased number of',' consisting predominantly of']
    }),
    z: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:      [undefined, ' a mildly increased number of',' a significantly increased number of',' consisting predominantly of']
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
    format: 'Myelopoiesis is {w x y} {z a}.',
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
    }),
    a: ordinal({
        long_name:  'left shift',
        short_name: 'left shift',
        states:     [undefined, 'with a mild','with a moderate', 'with a marked']
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
        long_name:  'dysplastic forms',
        short_name: 'dysplastic',
        states:     [undefined, 'rare', 'few', 'scattered', 'occasional','several']
    })
});

sentence({
    format: '{x} with {a b c} are noted.',
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
    }),    
    c: ordinal({
        long_name:  'plasma cell aggregates',
        short_name: 'aggregates',
        states:     [undefined,'no', 'rare', 'few', 'scattered', 'occasional','several']
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
    format: '{x} are noted.',
    x: ordinal({
        long_name:  'lymphoid aggregates',
        short_name: 'lymphoid aggregates',
        states:     [undefined, 'No','rare', 'a few','scattered', 'occasional','several']
    })
});

//- vim:set syntax=javascript:
