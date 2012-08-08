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

    var $, binary, capitalize, categorical, conjoin, Cycle, cycle,
        generate_report, isFunction, ordinal, peripheral_smear, ply, sentence,
        trim, uuid;

 // Definitions

    $ = window.jQuery;

    binary = function (obj) {
     // This function needs documentation.
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        obj.states = [undefined, ''];
        var key = uuid();
        return $('<input/>', {
            id: key,
            click: function () {
             // This function needs documentation.
                var x = $(this).data('cycle-instance');
                x.next();
                this.checked = (x.current > 0);
                generate_report();
                return;
            },
            type: 'radio'
        }).
            data('cycle-instance', cycle(obj)).
            after('<label for="' + key + '">' + obj.short_name + '</label>');
    };

    capitalize = function (x) {
     // This function needs documentation.
        if (typeof x !== 'string') {
            throw new TypeError('Argument must be a string.');
        }
        return x.charAt(0).toUpperCase() + x.slice(1);
    };

    categorical = function (x) {
     // This function needs documentation.
        /*jslint unparam: true */
        if ((x instanceof Array) === false) {
            throw new TypeError('Argument must be an array.');
        }
        var callback, name, y;
        callback = function (evt) {
         // This function needs documentation.
            var id, pred;
            id = evt.target.id;
            pred = '[type="radio"][name="' + name + '"][id!="' + id + '"]';
            $('input' + pred).each(function () {
             // This function needs documentation.
                $(this).data('cycle-instance').current = 0;
                return;
            });
            return;
        };
        name = uuid();
        y = [];
        ply(x).by(function (i, obj) {
         // This function needs documentation.
            Array.prototype.push.apply(y, binary(obj));
            return;
        });
        ply(y).by(function (key, val) {
         // This function needs documentation.
            if (val.type === 'radio') {
                $(val).attr('name', name).click(callback);
            }
            return;
        });
        return y;
    };

    conjoin = function (x) {
     // This function joins the elements of an array using the "Oxford comma".
        if ((x instanceof Array) === false) {
            throw new TypeError('Argument must be an array.');
        }
        if (x.length < 3) {
            return x.join(' and ');
        }
        return x.slice(0, -1).join(', ') + ', and ' + x.slice(-1);
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
        ].join('')).focus();
        return;
    };

    isFunction = function (f) {
     // This function returns `true` only if and only if `f` is a Function.
     // The second condition is necessary to return `false` for a RegExp.
        return ((typeof f === 'function') && (f instanceof Function));
    };

    ordinal = function (obj) {
     // This function needs documentation.
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        var key = uuid();
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
        var temp, y;
        temp = [];
        y = [];
        $('#peripheral-smear-1 input:checked').each(function () {
         // This function needs documentation.
            temp.push($(this).data('cycle-instance'));
            return;
        });
        if (temp.length > 0) {
            y.push(sentence('red blood cells are', conjoin(temp)));
            temp = [];
        }
        $('#peripheral-smear-2 input:checked').each(function () {
         // This function needs documentation.
            temp.push($(this).data('cycle-instance'));
            return;
        });
        if (temp.length > 0) {
            y.push(sentence('red blood cells show', conjoin(temp)));
            temp = [];
        }
        $('#peripheral-smear-3 input:checked').each(function () {
         // This function needs documentation.
            temp.push($(this).data('cycle-instance'));
            return;
        });
        if (temp.length > 0) {
            y.push(sentence(conjoin(temp), 'are present'));
            temp = [];
        }
        return y.join(' ');
    };

    ply = function () {
     // This function needs documentation.
        var args = Array.prototype.slice.call(arguments);
        return {
            by: function (f) {
             // This function needs documentation.
                if (isFunction(f) === false) {
                    throw new TypeError('`ply..by` expects a function.');
                }
                var i, key, obj, n, toc, x;
                n = args.length;
                toc = {};
                x = [];
                for (i = 0; i < n; i += 1) {
                    if ((args[i] !== null) && (args[i] !== undefined)) {
                        obj = args[i].valueOf();
                        for (key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (toc.hasOwnProperty(key) === false) {
                                    toc[key] = x.push([key]) - 1;
                                }
                                x[toc[key]][i + 1] = obj[key];
                            }
                        }
                    }
                }
                n = x.length;
                for (i = 0; i < n; i += 1) {
                    f.apply(this, x[i]);
                }
                return;
            }
        };
    };

    sentence = function () {
     // This function needs documentation.
        var args, i, n, y;
        args = Array.prototype.slice.call(arguments);
        n = args.length;
        y = [];
        for (i = 0; i < n; i += 1) {
            y[i] = trim(args[i]);
        }
        return capitalize(y.join(' ') + '.');
    };

    trim = function (x) {
     // This function needs documentation.
        if (String.prototype.hasOwnProperty('trim')) {
            return x.trim();
        }
        return x.replace(/^\s*|\s*$/g, '');
    };

    uuid = function () {
     // This function generates random hexadecimal UUIDs of length 32.
        var x, y;
        y = '';
        while ((x = y.length) < 32) {
            y += Math.random().toString(16).slice(2, 34 - x);
        }
        return y;
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
        var states = {
            'cytes': [
                undefined, 'rare', 'few', 'scattered', 'occasional', 'several'
            ],
            'cytoses': [
                undefined, 'mild', 'moderate', 'severe'
            ]
        };
        $.fn.append.apply($('#peripheral-smear-1'), [
            categorical([
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
            categorical([
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
            ]),
            ' .'
        ]);
        $.fn.append.apply($('#peripheral-smear-2'), [
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
            ' .'
        ]);
        $.fn.append.apply($('#peripheral-smear-3'), [
            ordinal({
                long_name:  'acanthocytes',
                short_name: 'acantho',
                states:     states.cytes
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
            ' are present.'
        ]);
     // Finally, initialize the default value of the report.
        generate_report();
        return;
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
