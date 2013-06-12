//- JavaScript source code

//- range_test.js ~~
//                                                      ~~ (c) SRW, 12 Jun 2013
//                                                  ~~ last updated 12 Jun 2013

section('Range Test');

sentence({
    format: 'We found {x}% badness.',
    x: range({
        min: 0,
        max: 100,
        step: 5
    })
});

//- vim:set syntax=javascript:
