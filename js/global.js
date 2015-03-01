jQuery(document).ready(function($){
	$('button#search').on('click',doTheSearch);
});

var config = "./config.json",
	search_str = "http://api.themoviedb.org/3/search/movie?api_key=";

// Setup API class
function SearchAPI(query){
	this.search = function(){
		$.getJSON(config,function(data){
			var str = search_str+data.key+"&query="+query;
			$.getJSON(str,function(result){
				var str_result = JSON.stringify(result,null,'\t');
				$('#result').html('<pre>'+str_result+'</pre>');
			});
		});
	};
}

function doTheSearch(){
	var query = $('input#query').val();
	if( query ){
		query = escape(query);
		console.log(query);
		var aSearch = new SearchAPI(query);
		aSearch.search();
	} else alert('You will need to type something.');
}