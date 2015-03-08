jQuery(document).ready(function($){
	$('button#search').on('click',doTheSearch);
	$('input#query').keyup(function(e){
		if( e.keyCode == 13 ) doTheSearch();
	});
	$('.result-action button').on('click',function(){
		// DOM not reading new buttons, will need fix.
		console.log($(this).class());
	});
});

var conf_path = "./config.json";

// Setup API class
var Query = function(){
	this.search = function(title){
		$.getJSON(conf_path,function(conf){
			var query_str = conf.base_que+conf.user_key+"&query="+title;
			$.getJSON(query_str,function(r){
				//spitStrJSON(r);
				var res = r.results,
					len = res.length,
					$r = $('#result');
					i = 0;
				if( res && len > 0 ) $r.html('<ul class="results"></ul>');
				else $r.html('<h2 class="results">No results.<br />Try something else.</h2>');
				$rr = $r.find('.results');
				for( i=0; i<len; i++ ){ 
					var cur = res[i],
						img = "",
						date = cur.release_date.split('-');
					if( cur.poster_path ){
						img = "<img src=\""+
								conf.base_img+
								conf.size_img+
								cur.poster_path+
								"\" alt=\""+cur.title+
								" movie poster\" class=\"poster\" width=\"250\" height=\"375\" />";
					} else img = "<div class=\"poster null\"></div>";
					/*jshint multistr: true */
					var rrStr = "<li class=\"result r"+i+"\" data-hit=\""+i+"\"> \
									<div class=\"result-frame\"> \
										"+img+" \
										<div class=\"meta\"> \
											<p class=\"title\">"+cur.title+"</p> \
											<span class=\"year altF val\">"+date[0]+"</span> \
											<span class=\"vote altF val\"><i>&#9829;</i>"+cur.vote_average+"</span> \
										</div> \
									</div> \
									<div class=\"result-action\"> \
										<button class=\"mark\">Mark It</button> \
										<button class=\"find\">Find It</button> \
									</div> \
								</li>";
					$rr.append(rrStr);
				}
			});
		});
	};
};

function doTheSearch(){
	var query = $('input#query').val();
	if( query ){
		var curSearch = new Query();
		curSearch.search(escape(query));
	} else alert('You will need to type something.');
}

function spitStrJSON(obj){
	var str = JSON.stringify(obj,null,'\t'),
		css = "style=\"padding:1em;font-size:0.75em;line-height:1.4em;background:CornflowerBlue;color:Ivory;font-family:courier;overflow:scroll;\"";
	$('#pre').html('<pre '+css+'>'+str+'</pre>');
}


