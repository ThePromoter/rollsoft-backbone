require.config({
    // Specify the base JS directory
    baseUrl: 'js/',
    
    // Default plugin settings, listed here as a reference
    hbs: {
        templateExtension : 'hbs',
        disableHelpers: false,
        helperDirectory: 'templates/helpers/',
        debug: false
    },
    
    // Create aliases to commonly used modules
    paths: {
        // Libraries
        'backbone'            : 'lib/backbone-1.1.2',
        'underscore'          : 'lib/underscore',
        
        // jQuery plugins
        'jquery'              : 'lib/jquery-2.1.3',
        
        // Templating
        'json2'               : 'lib/json2',
        'hbs'                 : 'lib/handlebars/hbs',
        'handlebars'          : 'lib/handlebars/handlebars'
    },
    
    // Define dependencies manually if the library doesn't support AMD
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        },
        json2: {
            exports: 'JSON'
        }
    }
});
