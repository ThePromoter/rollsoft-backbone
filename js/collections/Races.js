define([
    'models/Race',
    'backbone'
], function(Race, Backbone) {
    return Backbone.Collection.extend({
        model: Race
    });
});