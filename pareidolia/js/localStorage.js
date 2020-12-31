//BACKBONE LOCALSTORAGE
/*
	Ratings
	array met alle waarden die gesubmit zijn
	gemiddelde van 
	alle ratings die users submite bijhouden
	array bij model?
	
	detail mogelijkheid om te raten
	on click submit
	formulier rating
	event opvangen
	form uitlezen
	collection opvragen
	rating
	----
	model updaten > view auto updaten

	1. eventlistener op knop die stuurt naar photoId/add/rating
	2.router op #:id/add/:rating
	3. router function -> indien een getal: aan array toevoegen in localstorage
*/
/*
var PhotoModel = Backbone.Model.extend({
			defaults: {
				title 	: "Unknown",
				url		: "null",
				photo 	: "Unknown",
				comments: "none",
				cat_ids	: [],
				rating	: []
				}
		});

var PhotoCollection = Backbone.Collection.extend({
	model: PhotoModel,
	localStorage: new Backbone.LocalStorage("myphotos-backbone"),

	initialize: function () {

		this.fetch({
			success: function (photos) {
				if (photos.length > 0)
				{
					console.log('Er zitten ' + photos.length + ' photod in de lokale database');
				}
				else
				{
					console.log('Er zijn geen photos gevonden in de lokale database');
				}
			}
		})
		// Nagaan of er reeds photos lokaal bewaard zijn.
		if (!this.length)
		{
			this.add([
				{
				id		: "27",
				title 	: "Not feeling so good.",
				url		: "#photo27",
				photo 	: "img/Photo27.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [5]
				},
				{
				id		: "28",
				title 	: "Doctor Hippo",
				url 	: "#photo28",
				photo 	: "img/Photo28.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [1]
				}
				
			]);

			for (var photo in this.models)
			{
				this.models[photo].save();
			}
			console.log('2 photos aan de lokale database toegevoegd');
		}
	}
});

var photos = new PhotoCollection();
*/

/*
var max, min, avg, len;

		_.each(photos, function (obj) {
			console.log("ratings for movie with id " + obj.cat_ids);

			len = obj.rating.length;
			max = _.max(obj.rating);
			min = _.min(obj.rating);
			avg = ( _.reduce(obj.rating, function (memo, num) { return memo+num; } ) / len);
			console.log("  max rating: " + max);
			console.log("  min rating: " + min);
			console.log("  average rating: " + avg);
		})

		var photos_with_five_stars = _.filter(photos, function (obj) {
			return (_.contains(obj.rating, 5));
		});

		console.log("Photos that have at least one 5-star rating: " + photos_with_five_stars);

		var all_ratings = [];

		_.each(photos, function(obj) {
			all_ratings.push(obj.rating);
		});

		all_ratings = _.flatten(all_ratings);

		console.log("Alle ratings: " + all_ratings);

		var rating_values = _.union(all_ratings);

		console.log("Rating values: " + rating_values);
*/