		// BACKBONE ROUTER
		var Router = Backbone.Router.extend({
			routes: {
				'' 							: 'home',
				'popular' 					: 'popular',
				'categories'				: 'categories',
				'category/:categoryID'		: 'categorySelection',
				'photo:id'					: 'photoDetail',
				'search'					: 'searchForm',
				'search/:query'				: 'searchResults',
				'search/:key/:value'		: 'detailedQuery'
			}
		});

		var router = new Router();

		var BackboneProject = {};
		BackboneProject.srchForm = new PhotoSearchView();
		

		router.on('route:home', function () {
			$(".nav li").removeClass("active");		
			$("#nav-home").addClass("active");

			$("#mainDiv").removeClass("detailView","categoriesView","categoriesSelectionView","popularView")
						.addClass("photosView");
			console.log("home");
			var photosView = new PhotosView({ model: photos });
			photosView.render();

		});

		router.on('route:popular', function () {
			$(".nav li").removeClass("active");
			$("#nav-popular").addClass("active");

			$("#mainDiv").removeClass("detailView","categoriesView","categoriesSelectionView","photosView")
						.addClass("popularView");
			
			console.log("popular");

			var popularView = new PopularView({ model: photos});
			popularView.render();
			
		});

		router.on('route:categories', function () {
			$(".nav li").removeClass("active");
			$("#nav-categories").addClass("active");

			$("#mainDiv").removeClass("detailView","photosView","categoriesSelectionView","popularView")
						.addClass("categoriesView");
			
			console.log("categories");
			
			var categoriesView = new CategoriesView({ model: photos });
			categoriesView.render();
		});

		router.on('route:categorySelection', function (categoryID) {
			$(".nav li").removeClass("active");
			$("#nav-categories").addClass("active");
			
			var categoryString = "#category-"+categoryID;
			$(categoryString).addClass("active");
			
			$("#mainDiv").removeClass("detailView","photosView","categoriesView","popularView")
						.addClass("categoriesSelectionView");


			console.log("categoriesView");
			console.log(categoryID);
			
			var categoriesSelectionView = new CategoriesSelectionView({ model: photos});
			categoriesSelectionView.render(categoryID);
		});

		router.on('route:photoDetail', function (id) {
			$("#mainDiv").removeClass("photosView","categoriesView","categoriesSelectionView","popularView")
						.addClass("detailView");

			var detailView = new DetailView({ model: photos });
			detailView.render(id);
		});

		router.on('route:searchForm',function(){
			BackboneProject.srchForm.render();
		});

		router.on('route:searchResults', function ( query ) {
			BackboneProject.srchForm.render(query);

			var photoSearchResultsView = new PhotoSearchResultsView({ model: photos });
			photoSearchResultsView.render(query);
		});

		router.on('route:detailedQuery', function ( key,value ) {
			BackboneProject.srchForm.render(key,value);

			var photoSearchResultsView = new PhotoSearchResultsView({ model: photos });
			photoSearchResultsView.render(query);
		});

		Backbone.history.start();