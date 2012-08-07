//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 03 Aug 2012
//                                                  ~~ last updated 07 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint browser: true, indent: 4, maxlen: 80 */

 // Prerequisites

    if (window.hasOwnProperty('jQuery') === false) {
        throw new Error('jQuery is missing.');
    }

 // Declarations

    var $, conjoin, create_checkbox, Cycle, cycle, generate_report,
        peripheral_smear, trim;

 // Definitions

    $ = window.jQuery;

    conjoin = function (x) {
     // This function joins the elements of an array using the "Oxford comma".
        if (x.length === 0) {
            return '.';
        }
        if (x.length === 1) {
            return ' ' + x[0] + '.';
        }
        if (x.length === 2) {
            return ' ' + x.join(' and ') + '.';
        }
        return ' ' + x.slice(0, -1).join(', ') + ', and ' + x.slice(-1) + '.';
    };

    create_checkbox = function (options) {
     // This function returns an HTML string for use with jQuery.
        if ((options instanceof Object) === false) {
            throw new TypeError('`create_checkbox` expects an object');
        }
        if (options.hasOwnProperty('id') === false) {
            throw new Error('No "id" property specified.');
        }
        if (options.hasOwnProperty('label') === false) {
            throw new Error('No "label" property specified.');
        }
        if (options.id.charAt(0) === '#') {
            options.id = options.id.slice(1);
        }
        return [
            '<input type="checkbox" id="', options.id, '"/>',
            '<label for="', options.id, '">', options.label, '</label>'
        ].join('');
    };

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

    generate_report = function (options) {
     // This function joins the output from each section's own generating
     // function as text and puts that text into the designated textarea.
        if ((options instanceof Object) === false) {
            options = {};
        }
        $('#report').val([
            peripheral_smear()
        ].join(''));
        return;
    };

    peripheral_smear = function () {
     // This function generates the report's "Peripheral Smear" section.
     //
     // Example output:
     //
     //     Red blood cells [are _ and] show [modifier *cytosis].
     //     [[modifier *cytes]+ are present].
     //
     //     (stippling should be an entirely separate sentence.)
     //
        var callback, key, states, x;
        callback = function (evt) {
         // This function needs documentation.
            var key = '#' + evt.currentTarget.id;
            x[key].next();
            if (x[key].current > 1) {
                this.checked = true;
            }
            generate_report();
            return;
        };
        states = {
            'cytes': [
                undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
            ],
            'cytoses': [
                undefined, 'mild', 'moderate', 'severe'
            ],
            'on_or_off': [
                undefined, ''
            ]
        };
        x = {
         // Naming convention here is "#ps-short_name", where "#" allows it to
         // be a CSS selector and "ps" acts as a namespace of sorts for the
         // peripheral smear section.
            '#ps-apk': cycle({
                long_name:  'anisopoikilocytosis',
                short_name: 'APK',
                states:     states.cytoses
            }),
            '#ps-aniso': cycle({
                long_name:  'anisocytosis',
                short_name: 'aniso',
                states:     states.cytoses
            }),
            '#ps-poikilo': cycle({
                long_name:  'poikilocytosis',
                short_name: 'poikilo',
                states:     states.cytoses
            }),
            '#ps-normocytic': cycle({
                long_name:  'normocytic',
                short_name: 'normocytic',
                states:     states.on_or_off
            }),
            '#ps-normochromic': cycle({
                long_name:  'normochromic',
                short_name: 'normochromic',
                states:     states.on_or_off
            }),
            '#ps-dacro': cycle({
                long_name:  'dacrocytes',
                short_name: 'dacro',
                states:     states.cytes
            }),
            '#ps-ellipto': cycle({
                long_name:  'elliptocytes',
                short_name: 'ellipto',
                states:     states.cytes
            }),
            '#ps-schisto': cycle({
                long_name:  'schistocytes',
                short_name: 'schisto',
                states:     states.cytes
            }),
            '#ps-target': cycle({
                long_name:  'target cells',
                short_name: 'target',
                states:     states.cytes
            }),
            '#ps-polychrom': cycle({
                long_name:  'polychromatic cells',
                short_name: 'polychrom',
                states:     states.cytes
            }),
            '#ps-stomato': cycle({
                long_name:  'stomatocytes',
                short_name: 'stomato',
                states:     states.cytes
            }),
            '#ps-sphero': cycle({
                long_name:  'spherocytes',
                short_name: 'sphero',
                states:     states.cytes
            }),
            '#ps-echino': cycle({
                long_name:  'echinocytes',
                short_name: 'echino',
                states:     states.cytes
            })
        };
        for (key in x) {
            if (x.hasOwnProperty(key)) {
                $('#peripheral-smear').append(create_checkbox({
                    id: key,
                    label: x[key].short_name
                }));
                $(key).click(callback);
            }
        }
     // Finally, add a period at the end of our template's "sentence".
        $('#peripheral-smear').append(' .');
        peripheral_smear = function () {
         // THIS FUNCTION NEEDS A LOT OF DOCUMENTATION.
            var key, y;
            y = [];
            for (key in x) {
                if ((x.hasOwnProperty(key)) && ($(key).is(':checked'))) {
                    y.push(x[key]);
                }
            }
            return 'Red blood cells show' + conjoin(y);
        };
        return peripheral_smear();
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
        return '(?)';
    };

    Cycle.prototype.valueOf = function () {
     // This is here for consistency's sake, but I highly recommend against
     // any code that actually uses it. Since the expected behavior here would
     // always result in a coercion to `NaN`, I have taken the liberty to
     // inline that value. Uncomment what follows to see for yourself :-)
        return this.toString();
    };

 // Out-of-scope definitions (via "invocations" :-P)

    $(document).ready(function () {
     // This function runs when jQuery decides the page is ready.
        generate_report({init: true});
        return;
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
