		//BACKBONE MODEL
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

		//Instances PhotoModel
		//Categories: House 1/Food 2/Car 3/Object 4/Flower 5/Miscellaneous 6
		var photo1 = new PhotoModel({
				id		: "1",
				title 	: "Clock",
				url 	: "#photo1",
				photo 	: "img/Photo1.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [1,5,4,2]
		});

		var photo2 = new PhotoModel({
				id		: "2",
				title 	: "Skeleton",
				url 	: "#photo2",
				photo 	: "img/Photo2.jpg",
				comments: "BLABLABLA",
				cat_ids	: [5],
				rating	: [2,4,2,1,3]
		});

		var photo3 = new PhotoModel({
				id		: "3",			
				title 	: "Someone's angry",
				url 	: "#photo3",
				photo 	: "img/Photo3.jpg",
				comments: "BLABLABLA",
				cat_ids	: [3],
				rating	: [1,4,3,2]
		});

		var photo4 = new PhotoModel({
				id		: "4",
				title 	: "Bird house",
				url 	: "#photo4",
				photo 	: "img/Photo4.jpg",
				comments: "BLABLABLA",
				cat_ids	: [1],
				rating	: [1,2,4]
		});

		var photo5 = new PhotoModel({
				id		: "5",
				title 	: "Mad",
				url		: "#photo5",
				photo 	: "img/Photo5.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [3,4,1]
		});

		var photo6 = new PhotoModel({
				id		: "6",
				title 	: "Sink is confused",
				url 	: "#photo6",
				photo 	: "img/Photo6.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [1,2,4,1]
		});

		var photo7 = new PhotoModel({
				id		: "7",
				title 	: "Blergh",
				url 	: "#photo7",
				photo 	: "img/Photo7.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [5,1,4,5,2,4]
		});

		var photo8 = new PhotoModel({
				id		: "8",
				title 	: "Me Gusta",
				url 	: "#photo8",
				photo 	: "img/Photo8.jpg",
				comments: "BLABLABLA",
				cat_ids	: [5],
				rating	: [2,1,4,3,4]
		});

		var photo9 = new PhotoModel({
				id		: "9",
				title 	: "Shocked church",
				url		: "#photo9",
				photo 	: "img/Photo9.jpg",
				comments: "BLABLABLA",
				cat_ids	: [1],
				rating	: [1,4,1,3,2]
		});

		var photo10 = new PhotoModel({
				id		: "10",
				title 	: "Don't eat us",
				url 	: "#photo10",
				photo 	: "img/Photo10.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [2,1,4,3]
		});

		var photo11 = new PhotoModel({
				id		: "11",
				title 	: "Owl, is that you?",
				url		: "#photo11",
				photo 	: "img/Photo11.jpg",
				comments: "BLABLABLA",
				cat_ids	: [3],
				rating	: [2,4]
		});

		var photo12 = new PhotoModel({
				id		: "12",
				title 	: "Scary!",
				url 	: "#photo12",
				photo 	: "img/Photo12.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [1,2,4,3]
		});

		var photo13 = new PhotoModel({
				id		: "13",
				title 	: "Dentist please!",
				url 	: "#photo13",
				photo 	: "img/Photo13.jpg",
				comments: "BLABLABLA",
				cat_ids	: [1],
				rating	: [1,2,3]
		});

		var photo14 = new PhotoModel({
				id		: "14",
				title 	: "Not sure if house or Fry?",
				url 	: "#photo14",
				photo 	: "img/Photo14.jpg",
				comments: "BLABLABLA",
				cat_ids	: [1],
				rating	: [2,3,4]
		});

		var photo15 = new PhotoModel({
				id		: "15",
				title 	: "Funny snail",
				url 	: "#photo15",
				photo 	: "img/Photo15.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [1,4,2,5]
		});

		var photo16 = new PhotoModel({
				id		: "16",
				title 	: "Chewbacca is that you?",
				url 	: "#photo16",
				photo 	: "img/Photo16.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [4,2,5,3,5]
		});

		var photo17 = new PhotoModel({
				id		: "17",
				title 	: "Why so angry?",
				url 	: "#photo17",
				photo 	: "img/Photo17.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [2,4,3,1]
		});

		var photo18 = new PhotoModel({
				id		: "18",
				title 	: "Happy microbe",
				url 	: "#photo18",
				photo 	: "img/Photo18.jpg",
				comments: "BLABLABLA",
				cat_ids	: [6],
				rating	: [4,2,5,4,3]
		});

		var photo19 = new PhotoModel({
				id		: "19",
				title 	: "Confused smiley with a hat",
				url 	: "#photo19",
				photo 	: "img/Photo19.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4,6],
				rating	: [1,4,2,3]
		});

		var photo20 = new PhotoModel({
				id		: "20",
				title 	: "Yawn!",
				url 	: "#photo20",
				photo 	: "img/Photo20.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [3,4,1,5]
		});

		var photo21 = new PhotoModel({
				id		: "21",
				title 	: "Mwahaha",
				url 	: "#photo21",
				photo 	: "img/Photo21.jpg",
				comments: "BLABLABLA",
				cat_ids	: [3,4,6],
				rating	: [2,4,3,1,5]
		});

		var photo22 = new PhotoModel({
				id		: "22",
				title 	: "Photography with the vampire",
				url 	: "#photo22",
				photo 	: "img/Photo22.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [2,4,3,5]
		});

		var photo23 = new PhotoModel({
				id		: "23",
				title 	: "Grapefruitman",
				url 	: "#photo23",
				photo 	: "img/Photo23.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [1,3,2,4]
		});

		var photo24 = new PhotoModel({
				id		: "24",
				title 	: "Like a sir",
				url 	: "#photo24",
				photo 	: "img/Photo24.jpg",
				comments: "BLABLABLA",
				cat_ids	: [2],
				rating	: [1,3,4]
		});

		var photo25 = new PhotoModel({
				id		: "25",
				title 	: "It's a trap!",
				url 	: "#photo25",
				photo 	: "img/Photo25.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [1,5,4,2]
		});

		var photo26 = new PhotoModel({
				id		: "26",
				title 	: "Happy plane",
				url 	: "#photo26",
				photo 	: "img/Photo26.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [2,4,5,3]
		});

		var photo27 = new PhotoModel({
				id		: "27",
				title 	: "Not feeling so good.",
				url		: "#photo27",
				photo 	: "img/Photo27.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [5,2,4,3,5]
		});

		var photo28 = new PhotoModel({
				id		: "28",
				title 	: "Doctor Hippo",
				url 	: "#photo28",
				photo 	: "img/Photo28.jpg",
				comments: "BLABLABLA",
				cat_ids	: [4],
				rating	: [2,4,3,1]
		});
		
				
		//BACKBONE COLLECTIONS
		var PhotoCollection = Backbone.Collection.extend({ model: PhotoModel });

		var photos = new PhotoCollection([photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10,photo11,photo12,photo13,photo14,photo15,photo16,photo17,photo18,photo19,photo20,photo21,photo22,photo23,photo24,photo25,photo26,photo27,photo28]);
			
		/*
		var PhotoCategories = Backbone.Collection.extend({});

		var photo_cats = new PhotoCategories([
			{cat_id:1,urlTitle:"house",name:"House"},
			{cat_id:2,urlTitle:"food",name:"Food"},
			{cat_id:3,urlTitle:"car",name:"Car"},
			{cat_id:4,urlTitle:"object",name:"Object"},
			{cat_id:5,urlTitle:"flower",name:"Flower"},
			{cat_id:6,urlTitle:"miscellaneous",name:"Miscellaneous"}
			]);
		*/

		