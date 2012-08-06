//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 03 Aug 2012
//                                                  ~~ last updated 05 Aug 2012

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
        if ((options instanceof Object) === false) {
            options = {};
        }
        var key, x, y;
        x = {
         // '#elementid':       'human readable text'
         // ------              ---------------------
            '#ps-apk':          'APK',
            '#ps-aniso':        'aniso',
            '#ps-poikilo':      'poikilo',
            '#ps-normocytic':   'normocytic',
            '#ps-normochromic': 'normochromic',
            '#ps-dacro':        'dacro',
            '#ps-ellipto':      'ellipto',
            '#ps-schisto':      'schisto',
            '#ps-target':       'target',
            '#ps-polychrom':    'polychrom',
            '#ps-stomato':      'stomato',
            '#ps-sphero':       'sphero',
            '#ps-echino':       'echino'
        };
        if (options.init === true) {
            for (key in x) {
                if (x.hasOwnProperty(key)) {
                    $('#peripheral-smear').append(create_checkbox({
                        id: key,
                        label: x[key]
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
                y.push(x[key]);
            }
        }
        return 'Red blood cells show' + conjoin(y);
    };

 // Out-of-scope definitions (via "invocations" :-P)

    $(document).ready(function () {
     // This function runs when jQuery decides the page is ready.
        //$(document).mousemove(generate_report);
        generate_report({init: true});
        return;
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
