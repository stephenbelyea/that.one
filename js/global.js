jQuery(document).ready(function($){

	$.getJSON(config,function(data){ 
		tmdb_api = data.tmdb_api; 
		console.log(tmdb_api);
	});

	console.log(tmdb_api);


	var search_str = "http://api.themoviedb.org/3/search/movie?api_key="+tmdb_api.key+"&query=birdman"; 
	$.getJSON(search_str,function(data){
		//console.log(data);
	});
	
});

var config = "./config.json",
	tmdb_api;