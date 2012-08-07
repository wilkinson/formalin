//- JavaScript source code

//- sentences.js ~~
//
//  This program experiments with object-oriented programming as a means for
//  modeling certain parts of English speech in JavaScript without resorting
//  to triples and semantic web concepts, which are overkill for the current
//  scale of the problem. It works well enough for me to plan on merging it
//  into `main.js` tomorrow, but for now I'll just go to bed :-)
//
//                                                      ~~ (c) SRW, 06 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80 */

 // Prerequisites

 // Declarations

    var Cycle, cycle, trim;

 // Definitions

    Cycle = function Cycle(obj) {
     // This constructor function needs documentation, but the error messages
     // should provide a reasonable guide ;-)
        if ((obj instanceof Object) === false) {
            throw new TypeError('`Cycle` argument must be an object.');
        }
        if ((obj.hasOwnProperty('long_name')) === false) {
            throw new Error('`Cycle` argument needs a `long_name` property.');
        }
        if ((obj.hasOwnProperty('short_name')) === false) {
            throw new Error('`Cycle` argument needs a `short_name` property.');
        }
        if ((obj.hasOwnProperty('states')) === false) {
            throw new Error('`Cycle` argument needs a `states` property.');
        }
        if (typeof obj.long_name !== 'string') {
            throw new TypeError('Property `long_name` must be a string.');
        }
        if (typeof obj.short_name !== 'string') {
            throw new TypeError('Property `short_name` must be a string.');
        }
        if ((obj.states instanceof Array) === false) {
            throw new TypeError('Property `states` must be an array.');
        }
        var that = this;
        that.current = 0;
        that.long_name = obj.long_name;
        that.short_name = obj.short_name;
        that.states = obj.states;
        return that;
    };

    cycle = function (obj) {
     // This function needs documentation.
        return new Cycle(obj);
    };

    trim = function (x) {
     // This function needs documentation.
        if (String.prototype.hasOwnProperty('trim')) {
            return x.trim();
        }
        return x.replace(/^\s*|\s*$/g, '');
    };

 // Prototype definitions

    Cycle.prototype.next = function () {
     // This function may behave strangely if entries are removed from the
     // `states` property. For now, we'll just leave a warning, since this
     // entire project is still in its infancy anyway.
        if (this.states.length > 0) {
            this.current = ((this.current + 1) % (this.states.length));
        }
        return;
    };

    Cycle.prototype.toJSON = function () {
     // This function may behave strangely if external code modifies the value
     // of `this.current` directly ...
        if (this.states[this.current] !== undefined) {
            return trim(this.states[this.current] + ' ' + this.long_name);
        }
        return undefined;
    };

    Cycle.prototype.toString = function () {
     // This function may behave strangely if external code modifies the value
     // of `this.current` directly ...
        if (this.states[this.current] !== undefined) {
            return trim(this.states[this.current] + ' ' + this.long_name);
        }
        return '';
    };

    Cycle.prototype.valueOf = function () {
     // This is here for consistency's sake, but I highly recommend against
     // any code that actually uses it. Since the expected behavior here would
     // always result in a coercion to `NaN`, I have taken the liberty to
     // inline that value. Uncomment what follows to see for yourself :-)
        //if (this.states[this.current] !== undefined) {
        //    return trim(this.states[this.current] + ' ' + this.long_name);
        //}
        return NaN;
    };

 // Out-of-scope definitions

 // Demonstrations

    (function () {

        var demo, normochromic, poikilo, puts;

        demo = function (x) {
         // This function needs documentation.
            var i, n;
            n = x.states.length;
            puts('Demo:', x.short_name);
            for (i = 0; i <= n; i += 1) {
                puts(JSON.stringify({val: x}), x, +x);
                x.next();
            }
            puts('');
            return;
        };

        normochromic = cycle({
            long_name:  'normochromic',
            short_name: 'normochromic',
            states:     [undefined, '']
        });

        poikilo = cycle({
            long_name:  'poikilocytosis',
            short_name: 'poikilo',
            states:     [undefined, 'severe', 'moderate', 'mild']
        });

        puts = function () {
         // This function needs documentation.
            //print.apply(this, arguments);
            return;
        };

        demo(normochromic);
        demo(poikilo);

        return;

    }());

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
