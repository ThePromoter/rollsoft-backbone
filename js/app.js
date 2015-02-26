require([
    'collections/Races',
    'views/CharacterCreation'
], function(Races, CharacterCreationView) {
    var races = new Races([{
        raceId: 1,
        name: 'Orc',
        subRaces:[{
            subRaceId:1,
            name:'Splork Orc'
        }]
    }, {
        raceId: 2,
        name:'Troll',
        subRaces:[{
            subRaceId: 2,
            name:'Internet Troll'
        }]
    }, {
        raceId: 3,
        name: 'Basic Bitch',
        subRaces:[]
    }]);
    var characterCreationView = new CharacterCreationView({
        collection: races
    });
    $('body').append(characterCreationView.$el);
    characterCreationView.render();
});