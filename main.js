//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 03 Aug 2012
//                                                  ~~ last updated 06 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint browser: true, indent: 4, maxlen: 80 */

 // Prerequisites

    if (window.hasOwnProperty('jQuery') === false) {
        throw new Error('jQuery is missing.');
    }

 // Declarations

    var $, conjoin, create_checkbox, generate_report, peripheral_smear;

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

    generate_report = function (options) {
     // This function joins the output from each section's own generating
     // function as text and puts that text into the designated textarea.
        if ((options instanceof Object) === false) {
            options = {};
        }
        $('#report').val([
            peripheral_smear(options)
        ].join(''));
        return;
    };

    peripheral_smear = function (options) {
     // This function generates the report's "Peripheral Smear" section.
     //
     // Example output:
     //
     //     Red blood cells [are _ and] show [modifier *cytosis].
     //     [[modifier *cytes]+ are present].
     //
     //     (stippling should be an entirely separate sentence.)
     //
        if ((options instanceof Object) === false) {
            options = {};
        }
        var key, grades, x, y;
        grades = ['rare', 'few', 'scattered', 'occasional', 'several'];
        x = {
         // Naming convention here is "#ps-short_name", where "#" allows it to
         // be a CSS selector and "ps" acts as a namespace of sorts for the
         // peripheral smear section.
            '#ps-apk': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'anisopoikilocytosis',
                short_name:     'APK'
            },
            '#ps-aniso': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'anisocytosis',
                short_name:     'aniso'
            },
            '#ps-poikilo': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'poikilocytosis',
                short_name:     'poikilo'
            },
            '#ps-normocytic': {
                grades: [''],
                long_name:      'normocytic',
                short_name:     'normocytic'
            },
            '#ps-normochromic': {
                grades: [''],
                long_name:      'normochromic',         //- ???
                short_name:     'normochromic'
            },
            '#ps-dacro': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'dacrocytes',           //- ???
                short_name:     'dacro'
            },
            '#ps-ellipto': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'elliptocytes',         //- ???
                short_name:     'ellipto'
            },
            '#ps-schisto': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'schistocytes',
                short_name:     'schisto'
            },
            '#ps-target': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'target cells',
                short_name:     'target'
            },
            '#ps-polychrom': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'polychromatic cells',
                short_name:     'polychrom'
            },
            '#ps-stomato': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'stomatocytes',
                short_name:     'stomato'
            },
            '#ps-sphero': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'spherocytes',
                short_name:     'sphero'
            },
            '#ps-echino': {
                grades: ['rare', 'few', 'scattered', 'occasional', 'several'],
                long_name:      'echinocytes',
                short_name:     'echino'
            }
        };
        if (options.init === true) {
            for (key in x) {
                if (x.hasOwnProperty(key)) {
                    $('#peripheral-smear').append(create_checkbox({
                        id: key,
                        label: x[key].short_name
                    }));
                    $(key).click(generate_report);
                }
            }
         // Finally, add a period at the end of our template's "sentence".
            $('#peripheral-smear').append(' .');
        }
        y = [];
        for (key in x) {
            if ((x.hasOwnProperty(key)) && ($(key).is(':checked'))) {
                y.push(x[key].long_name);
            }
        }
        return 'Red blood cells show' + conjoin(y);
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
