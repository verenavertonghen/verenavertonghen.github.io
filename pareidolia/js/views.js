		//BACKBONE VIEW
		//PHOTOS VIEW 
		var PhotosView = Backbone.View.extend({
			el: ".photosView",
			render: function () {
				var template = $("#photo-view-template").html();
				var photos_html = '';
				var photos = this.model.models;

				for(var photo in photos)
					{

					photos_html += '<div id="' + photos[photo].get("id") + '">';
					photos_html +='<a href="'+photos[photo].get("url")+'">';
					photos_html += '<img src="' +photos[photo].get("photo") + '" class="thumbnail-normal" />';
					photos_html += '</a>';
					photos_html += '</div>';
					}
				this.$el.html( _.template( template, { photos: photos_html }));
			}
		});

		//DETAIL VIEW
		var DetailView = Backbone.View.extend({
				el: ".detailView",
				render: function (id) {
					var template = $("#detail-view-template").html();
					var photoDetail_html = '';
					var tempPhoto =  photos.findWhere({ id: id});
					photoDetail_html += '<div>';
					photoDetail_html += '<h1 class="detail-text">' + tempPhoto.get("title") + '</h1>';
					photoDetail_html += '<img src="' + tempPhoto.get("photo") + '" class="detail-img" />';
					photoDetail_html += '</div>';

					photoDetail_html += '<h3>You can rate this picture!</h3>';
					photoDetail_html += '<form class="form-horizontal well" id="addRatingForm">';
					photoDetail_html += '<div class="control-group">';
					photoDetail_html += '<label class="control-label" for="inputTitle">Fill in a rating.</label>';
					photoDetail_html += '<div class="controls">';
					photoDetail_html += '<input type="text" id="inputTitle" placeholder="e.g. 1=Bad 2=Meeh 3=Neutral 4=Good 5=Fantastic!">';
					photoDetail_html += '</div>';
					photoDetail_html += '</div>';
					photoDetail_html += '<div class="control-group">';
					photoDetail_html += '<div class="controls">';
					photoDetail_html += '<button type="submit" class="btn btn-rating">Add my rating!</button>';
					photoDetail_html += '</div>';
					photoDetail_html += '</div>';
					photoDetail_html += '</form>';

					this.$el.html( _.template( template, { photoDetail : photoDetail_html }));

				}
		});
		
		//POPULAR VIEW
		var PopularView = Backbone.View.extend({
			el: ".popularView",
			render: function () {
				var template = $("#photo-view-template").html();
				var photos_html = '';

				photos.each(function(photo){
					if(_.contains(photo.get("rating"),5)==true)
					{
						console.log(photo.get(name)+"maakt deel uit van de populairste foto's");
						
						photos_html += '<div id="' + photo.get("id") + '">';
						photos_html += '<a href="'+photo.get("url")+'">';
						photos_html += '<img src="' +photo.get("photo") + '" class="thumbnail-normal" />';
						photos_html += '</a>';
						photos_html += '</div>';
					}
				})

				this.$el.html( _.template( template, { photos: photos_html }));
			}	
		});

		//CATEGORIES VIEW 
		var CategoriesView = Backbone.View.extend({
			el:'.categoriesView',
			render: function () {
				var template = $("#categories-view-template").html();
				var photoCategories_html='';
				var photos = this.model.models;

				for(var photo in photos)
					{

					photoCategories_html += '<div id="' + photos[photo].get("id") + '">';
					photoCategories_html += '<a href="'+photos[photo].get("url")+'">';
					photoCategories_html += '<img src="' +photos[photo].get("photo") + '" class="thumbnail-normal" />';
					photoCategories_html += '</a>';
					photoCategories_html += '</div>';
					}
				this.$el.html( _.template( template, { categoriesPlace: photoCategories_html }));
			}	
		});

		//CATEGORIES SELECTION NIEUW
		var CategoriesSelectionView = Backbone.View.extend({
			el:'.categoriesSelectionView',
			render: function (catNumber){
				var template =  $("#categories-view-template").html();
				var photoCategories_html='';

				switch (catNumber){
					case "house":
					catNumber=1;
					break;
					case "food":
					catNumber=2;
					break;
					case "car":
					catNumber=3;
					break;
					case "object":
					catNumber=4;
					break;
					case "flower":
					catNumber=5;
					break;
					case "miscellaneous":
					catNumber=6;
					break;
				}

				photos.each(function(photo){
					if(_.contains(photo.get("cat_ids"),catNumber)==true)
					{
						console.log(photo.get(name)+"maakt deel uit van categorie" +catNumber);
						
						photoCategories_html += '<div id="' + photo.get("id") + '">';
						photoCategories_html += '<a href="'+photo.get("url")+'">';
						photoCategories_html += '<img src="' +photo.get("photo") + '" class="thumbnail-normal" />';
						photoCategories_html += '</a>';
						photoCategories_html += '</div>';
					}
				})

				this.$el.html( _.template( template, { categoriesPlace: photoCategories_html }));
			}
		});
	
		//SEARCH VIEW
		var PhotoSearchView = Backbone.View.extend({
			el: '#content',
			render: function () {
				this.$el.html( $("#search-form").html() );

				if (arguments.length > 0)
				{
					//replaces + sign with space
					var querystr = arguments[0].replace(/\+/g, "%20");
					$("#searchQuery").val( decodeURIComponent(querystr) );
				}
			},
			events: {
				//eventlistener klikken button = search
				'submit #searchForm' : function (ev) {
					$form = $(ev.currentTarget);
					document.location = 'index.html#search/' + encodeURIComponent( $("#searchQuery", $form).val() ).replace(/%20/g,'+');
					return false;
				}
			}
		});

		//SEARCH RESULT VIEW
		//laat enkel fotos zien op basis van searchfilter
		//tolowercase niet afh grote/kleine letters
		//index of > geeft de plaats > als het een negatieve waarde is dan wordt het niet gevonden > als het groter of gelijk is aan 0 dan is er wel iets gevonde
		var PhotoSearchResultsView = Backbone.View.extend({
			el: ".photosView",
			render: function ( query_encoded ) {
			var query = decodeURIComponent(query_encoded.replace(/\+/g, "%20"));

				//._filter checkt alle items en return het als het true is
				//._reject doet het tegenovergestelde
				var result_photos = _.filter(this.model.models, function (photo_model) {
					//checkt alle attrubuten van het model photo
					var photo = photo_model.attributes;

					
					for (var key in photo) {
						if ( !(photo[key] instanceof Array) && photo[key].toLowerCase().indexOf( query.toLowerCase() ) >= 0 )
						{
							return true;
						}
					}
					return false;
				});


			var template = $("#photo-view-template").html();
			var photos_html = '';
				for(var photo in result_photos)
					{
					photos_html += '<div id="' + result_photos[photo].get("id") + '">';
					photos_html +='<a href="'+result_photos[photo].get("url")+'">';
					photos_html += '<img src="' +result_photos[photo].get("photo") + '" class="thumbnail-normal" />';
					photos_html += '</a>';
					photos_html += '</div>';
					}
				this.$el.html( _.template( template, { photos: photos_html }));
			}

		});