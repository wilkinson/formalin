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

    var $, binary, conjoin, Cycle, cycle, generate_report, ordinal,
        peripheral_smear, trim;

 // Definitions

    $ = window.jQuery;

    binary = function (obj) {
     // This function needs documentation.
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        if (obj.hasOwnProperty('short_name') === false) {
            throw new Error('Argument must have a `short_name` property.');
        }
        obj.states = [undefined, ''];
        var key = obj.short_name.split(/\s/).join('-').toLowerCase();
        return $('<input/>', {
            id: key,
            click: function () {
             // This function needs documentation.
                if ($(this).data('cycle-instance').next().current > 1) {
                    this.checked = true;
                }
                generate_report();
                return;
            },
            type: 'checkbox'
        }).
            data('cycle-instance', cycle(obj)).
            after('<label for="' + key + '">' + obj.short_name + '</label>');
    };

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

    generate_report = function () {
     // This function joins the output from each section's own generating
     // function as text and puts that text into the designated textarea.
        $('#report').val([
            peripheral_smear()
        ].join(''));
        return;
    };

    ordinal = function (obj) {
     // This function needs documentation.
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        if (obj.hasOwnProperty('short_name') === false) {
            throw new Error('Argument must have a `short_name` property.');
        }
        var key = obj.short_name.split(/\s/).join('-').toLowerCase();
        return $('<input/>', {
            id: key,
            click: function () {
             // This function needs documentation.
                if ($(this).data('cycle-instance').next().current > 1) {
                    this.checked = true;
                }
                generate_report();
                return;
            },
            type: 'checkbox'
        }).
            data('cycle-instance', cycle(obj)).
            after('<label for="' + key + '">' + obj.short_name + '</label>');
    };

    peripheral_smear = function () {
     // This function generates the report's "Peripheral Smear" section.
        var y = [];
        $('#peripheral-smear input:checked').each(function () {
         // This function needs documentation.
            y.push($(this).data('cycle-instance'));
            return;
        });
        return 'Red blood cells show' + conjoin(y);
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
        return this;
    };

    Cycle.prototype.toJSON = function () {
     // This function may behave strangely if external code modifies the value
     // of `this.current` directly ...
        if (this.states[this.current] !== undefined) {
            return trim(this.states[this.current] + ' ' + this.long_name);
        }
     // When a `toJSON` method returns `undefined`, as this one will, the value
     // of interest will be excluded by `JSON.stringify`.
        return;
    };

    Cycle.prototype.toString = Cycle.prototype.valueOf = function () {
     // This function may behave strangely if external code modifies the value
     // of `this.current` directly ...
        if (this.states[this.current] !== undefined) {
            return trim(this.states[this.current] + ' ' + this.long_name);
        }
        return '';
    };

 // Out-of-scope definition by way of an invocation :-)

    $(document).ready(function () {
     // This function runs when jQuery decides the page is ready.
        var states;
        states = {
            'cytes': [
                undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
            ],
            'cytoses': [
                undefined, 'mild', 'moderate', 'severe'
            ]
        };
        $.fn.append.apply($('#peripheral-smear'), [
            //'Red blood cells are',
            binary({
                long_name:  'normocytic',
                short_name: 'normocytic'
            }),
            binary({
                long_name:  'normochromic',
                short_name: 'normochromic'
            }),
            //' and show',
            ordinal({
                long_name:  'anisopoikilocytosis',
                short_name: 'APK',
                states:     states.cytoses
            }),
            ordinal({
                long_name:  'anisocytosis',
                short_name: 'aniso',
                states:     states.cytoses
            }),
            ordinal({
                long_name:  'poikilocytosis',
                short_name: 'poikilo',
                states:     states.cytoses
            }),
            ordinal({
                long_name:  'dacrocytes',
                short_name: 'dacro',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'echinocytes',
                short_name: 'echino',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'elliptocytes',
                short_name: 'ellipto',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'polychromatic cells',
                short_name: 'polychrom',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'schistocytes',
                short_name: 'schisto',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'spherocytes',
                short_name: 'sphero',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'stomatocytes',
                short_name: 'stomato',
                states:     states.cytes
            }),
            ordinal({
                long_name:  'target cells',
                short_name: 'target',
                states:     states.cytes
            }),
         // Add a period at the end of template's "sentence" ;-)
            ' .'
        ]);
     // Finally, initialize the default value of the report.
        generate_report();
        return;
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
