//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 25 Jun 2013
//                                                  ~~ last updated 20 Jul 2013

(function () {
    'use strict';

 // Pragmas

    /*jshint maxparams: 3, quotmark: single, strict: true */

    /*jslint browser: true, indent: 4, maxlen: 80 */

    /*properties
        addClass, alert, append, appendTo, apply, attr, binary, by,
        categorical, charAt, concat, done, fail, format, getScript, hasClass,
        hasOwnProperty, href, html, indexOf, join, jQuery, length, long_name,
        match, off, on, ordinal, prototype, push, queue, random, range, ready,
        removeClass, replace, search, section, sections, sentence, sentences,
        setTimeout, shift, short_name, slice, split, states, stringify, symbol,
        template, test, text, textbox, title, toggleClass, toString,
        toUpperCase, trim, url, val
    */

 // Prerequisites

    if (window.hasOwnProperty('jQuery') === false) {
     // NOTE: We should probably also check for the correct version ...
        throw new Error('jQuery is missing.');
    }

 // Declarations

    var $, binary, capitalize, categorical, chosen, comma, generate_report,
        load_templates, off, ordinal, ply, range, save, section, sentence,
        symbol, template, templates, textbox, uuid;

 // Definitions

    $ = window.jQuery;

    binary = function (obj) {
     // This function needs documentation.
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        if (obj.hasOwnProperty('long_name') === false) {
            throw new Error('Missing `long_name` property.');
        }
        if (obj.hasOwnProperty('short_name') === false) {
            throw new Error('Missing `short_name` property.');
        }
        var button;
        button = $('<button>' + obj.short_name + '</button>');
        button.addClass('btn');
        button.on('click touch', function () {
         // This function needs documentation.
            button.toggleClass(chosen);
            return;
        });
        button.toString = function () {
         // This function needs documentation.
            return (button.hasClass(chosen)) ? obj.long_name : undefined;
        };
        return button;
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
        if (x.length === 0) {
            throw new Error('No categories specified.');
        }
        var current, group, id;
        group = $('<div class="btn-group"></div>');
        id = uuid();
        group.attr('id', id);
        ply(x).by(function (i, obj) {
         // This function needs documentation.
            var b = $('<button class="btn">' + obj.short_name + '</button>');
            b.on('click touch', function () {
             // This function needs documentation.
                if (b.hasClass(chosen)) {
                    b.removeClass(chosen);
                    current = undefined;
                } else {
                    $('#' + id + ' button.' + chosen).removeClass(chosen);
                    b.addClass(chosen);
                    current = obj.long_name;
                }
                return;
            });
            b.appendTo(group);
            return;
        });
        group.toString = function () {
         // This function needs documentation.
            return current;
        };
        return group;
    };

    chosen = 'btn-inverse';

    comma = function (x) {
     // This function joins the elements of an array using the "Oxford comma".
        if ((x instanceof Array) === false) {
            throw new TypeError('Argument must be an array.');
        }
        if (x.length < 3) {
            return x.join(' and ');
        }
        return x.slice(0, -1).join(', ') + ', and ' + x.slice(-1);
    };

    generate_report = function () {
     // This function needs documentation.
        var title = $('#case-id').val();
        $('#modal-label').text((title.length > 0) ? title : 'Report');
        $('#report-goes-here').html(templates.join('<p></p>'));
        return;
    };

    load_templates = function () {
     // This function needs documentation.
        /*jslint unparam: true */
        if (location.search.length === 0) {
         // If no template has been specified, load "default.js" from the
         // "templates" directory.
            location.replace(location.href +
                    ((location.href.slice(-1) === '?') ? '' : '?') +
                    'templates/default.js');
            return;
        }
        ply(location.search.slice(1).split('&')).by(function (i, url) {
         // This function needs documentation.
            template(url);
            return;
        });
        return;
    };

    off = function () {
     // This function needs documentation.
        return;
    };

    off.toString = function () {
     // This function needs documentation.
        return '';
    };

    ordinal = function (obj) {
     // This function needs documentation.
        var button, state;
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        if (obj.hasOwnProperty('long_name') === false) {
            throw new Error('Missing `long_name` property.');
        }
        if (obj.hasOwnProperty('short_name') === false) {
            throw new Error('Missing `short_name` property.');
        }
        if (obj.hasOwnProperty('states') === false) {
            throw new Error('Missing `states` property.');
        }
        if (obj.states.length === 0) {
            throw new Error('No `states` were specified.');
        }
        button = $('<button class="btn"></button>');
        state = obj.states[0];
        button.on('click touch', function () {
         // This function needs documentation.
            var i = (obj.states.indexOf(state) + 1) % obj.states.length;
            state = obj.states[i];
            if (state === off) {
                button.removeClass(chosen);
            } else {
                button.addClass(chosen);
            }
            button.text(state.toString() + ' ' + obj.short_name);
            return;
        });
        button.text(state.toString() + ' ' + obj.short_name);
        if (state !== off) {
            button.addClass(chosen);
        }
        button.toString = function () {
         // This function needs documentation.
            if (button.hasClass(chosen)) {
                return state.toString() + ' ' + obj.long_name;
            }
            return;
        };
        return button;
    };

    ply = function (x) {
     // This function needs documentation.
        return {
            by: function (f) {
             // This function needs documentation.
                var i, key, n;
                if (x instanceof Array) {
                    for (i = 0, n = x.length; i < n; i += 1) {
                        f(i, x[i]);
                    }
                } else {
                    for (key in x) {
                        if (x.hasOwnProperty(key)) {
                            f(key, x[key]);
                        }
                    }
                }
                return;
            }
        };
    };

    range = function (obj) {
     // This function needs documentation.
        var y = obj;
        // ...
        return y;
    };

    save = function () {
     // This function needs documentation.
     /*
        var y = '';
        ply(templates).by(function (i, template) {
         // This function needs documentation.
            ply(template.sections).by(function (j, section) {
             // This function needs documentation.
                y += 'section(' + JSON.stringify(section.title) + ');';
                ply(section.sentences).by(function (k, sentence) {
                 // This function needs documentation.
                    y += '\nsentence(' +
                            JSON.stringify({format: sentence.format}) + ');';
                    return;
                });
                return;
            });
            return;
        });
        console.log(y);
        return;
     */
        return;
    };

    section = function (x) {
     // This function needs documentation.
        if ((typeof x !== 'string') && ((x instanceof String) === false)) {
            throw new TypeError('Section names must be strings.');
        }
        var last_template, url, y;
        last_template = templates.slice(-1)[0];
        url = last_template.url;
        y = {
            sentences: [],
            title: x,
            toString: function () {
             // This function needs documentation.
                return x.toUpperCase() + '<br>' + y.sentences.join(' ');
            }
        };
        last_template.sections.push(y);
        $('#templates-go-here').append('<hr><h2>' + x +
            '<a href="' + url + '" class="pull-right" target="_blank">' +
            '<span class="icon-file-text"></span></a></h2>');
        return;
    };

    sentence = function (obj) {
     // This function needs documentation.
        /*jslint regexp: true */
        if ((obj instanceof Object) === false) {
            throw new TypeError('Argument must be an object.');
        }
        if (obj.hasOwnProperty('format') === false) {
            throw new Error('Argument must have a `format` property.');
        }
        if (typeof obj.format !== 'string') {
            throw new TypeError('`format` property must be a string.');
        }
        var last_section, temp;
        last_section = templates.slice(-1)[0].sections.slice(-1)[0];
        temp = obj.format.match(/([^{}]+|[{][^{}]+[}])/g);
        ply(temp).by(function (key, val) {
         // This function needs documentation.
            if ((/^[{][^{}]+[}]$/).test(val) === false) {
                return;
            }
            var y = [];
            ply(val.slice(1, -1).split(' ')).by(function (i, index) {
             // This function needs documentation.
                y[i] = obj[index];
                return;
            });
            temp[key] = y;
            return;
        });
        obj.toString = function () {
         // This function needs documentation.
            var activated, temp;
            activated = 0;
            temp = obj.format.match(/([^{}]+|[{][^{}]+[}])/g);
            ply(temp).by(function (key, val) {
             // This function needs documentation.
                /*jslint unparam: true */
                if ((/^[{][^{}]+[}]$/).test(val) === false) {
                    return;
                }
                var y = [];
                ply(val.slice(1, -1).split(' ')).by(function (i, name) {
                 // This function needs documentation.
                    var input = obj[name].toString();
                    if (input !== undefined) {
                        activated += 1;
                        y.push(input.trim());
                    }
                    return;
                });
                temp[key] = comma(y);
                return;
            });
            return (activated > 0) ? capitalize(temp.join('')) : '';
        };
        last_section.sentences.push(obj);
        $('#templates-go-here')
            .append('<p>').append(Array.prototype.concat.apply([], temp));
        return;
    };

    symbol = function (x) {
     // This function translates known keywords into Unicode characters. If the
     // input string doesn't match a known keyword, it will return the input.
        if ((typeof x !== 'string') && ((x instanceof String) === false)) {
            throw new TypeError('`symbol` input must be a string.');
        }
        var y;
        switch (x) {
        case 'down arrow':
            y = '\u2193';
            break;
        case 'up arrow':
            y = '\u2191';
            break;
        default:
            y = x;
        }
        return y;
    };

    template = function (x) {
     // This function needs documentation.
        if (typeof x !== 'string') {
            throw new TypeError('Input argument must be a string.');
        }
        if (template.hasOwnProperty('queue') === false) {
            template.queue = [];
        }
        if (template.hasOwnProperty('ready') === false) {
            template.ready = true;
        }
        var load_next, url, y;
        load_next = function () {
         // This function needs documentation.
            /*jslint unparam: true */
            if ((template.ready === true) && (template.queue.length > 0)) {
                template.ready = false;
                url = template.queue.shift();
                y = {
                    sections: [],
                    toString: function () {
                     // This function needs documentation.
                        var content, i, n, temp;
                        n = y.sections.length;
                        temp = [];
                        for (i = 0; i < n; i += 1) {
                            content = y.sections[i].toString();
                            if (content.length > 0) {
                                temp.push(content);
                            }
                        }
                        return temp.join('<br>');
                    },
                    url: url
                };
                templates.push(y);
                $.getScript(url).done(function () {
                 // This function needs documentation.
                    template.ready = true;
                    return;
                }).fail(function (jqxhr, settings, exception) {
                 // This function needs documentation.
                    window.alert('Error: ' + exception);
                    return;
                });
            } else if (template.queue.length > 0) {
                window.setTimeout(load_next, 0);
            }
            return;
        };
        template.queue.push(x);
        load_next();
        return;
    };

    templates = [];

    textbox = function (x) {
     // This function needs documentation.
        if ((typeof x !== 'string') && ((x instanceof String) === false)) {
            throw new TypeError('Textbox names must be strings.');
        }
        var last_template, y;
        last_template = templates.slice(-1)[0];
        y = $('<textarea class="formalin-textbox"></textarea>');
        y.attr('placeholder', x);
        y.toString = function () {
         // This function needs documentation.
            var val = y.val().trim();
            return (val.length === 0) ? val : x + ': ' + val;
        };
        last_template.sections.push(y);
        $('#templates-go-here').append('<p>').append(y);
        return;
    };

    uuid = function () {
     // This function generates random hexadecimal UUIDs of length 32.
        var x, y;
        x = 0;
        y = '';
        while (x < 32) {
            y += Math.random().toString(16).slice(2, 34 - x);
            x = y.length;
        }
        return y;
    };

 // Out-of-scope definitions

    window.binary = binary;
    window.categorical = categorical;
    window.off = off;
    window.ordinal = ordinal;
    window.range = range;
    window.section = section;
    window.sentence = sentence;
    window.symbol = symbol;
    window.template = template;
    window.textbox = textbox;

 // Invocations

    $('#the-modal').on('show', generate_report);

    $('#save-button').on('click touch', save);

    $(document).ready(load_templates);

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
