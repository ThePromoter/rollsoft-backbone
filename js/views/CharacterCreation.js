define([
    'hbs!templates/character-creation',
    'models/Race',
    'backbone'
], function(characterCreationTemplate, Race, Backbone) {
    return Backbone.View.extend({
        initialize: function() {
            // This will store the selected race
            this.model = new Race();
            this.listenTo(this.model, 'change:raceId', this.render);
        },
        events: {
            'change #race-select' : 'updateChosenRace'
        },
        updateChosenRace: function(e) {
            var chosenRaceId = parseInt($(e.target).val()),
                chosenRace = this.collection.get(chosenRaceId);

            this.model.set(chosenRace.toJSON());
        },
        render: function() {
            this.$el.empty();
            this.$el.append(characterCreationTemplate({
                allRaces: this.collection.toJSON(),
                selectedRace: this.model.toJSON()
            }));

            return this;
        }
    });
});