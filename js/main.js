
(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 5000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0', "z-index": '9999', }).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider .slide").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
	.prependTo('#slider');		
	$('#nextbutton').click(function(){
		animSlide("next");
		return false;
		})
	$('#prewbutton').click(function(){
		animSlide("prew");
		return false;
		})
}
	var $adderSpan = '';
	$('.slide').each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#slider-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();



//Живой поиск


var langs = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

$('#search').bind("change keyup input click", function() {

	if(this.value.length >= 1){
		var searchval = this.value;
		var searchvalLower = searchval.toLowerCase();
		var filter = [];
		for(var i in langs){
			var name = langs[i];
			var nameLover = name.toLowerCase();
			if(nameLover.indexOf(searchvalLower) > -1){
				filter.push(name);
			}
		}

		// console.log(searchval);
		// console.log(filter);
		// console.log(data);

		var list = [];
		for (var i in filter) {
			name = filter[i];
			name = name.split(searchval).join('<b>'+searchval+'</b>');
			list.push('<li>'+name+'</li>');
		}
		$(".search_result").html(list).fadeIn();
	} else {
		$(".search_result").fadeOut();
	}

})


// $('#search').bind("change keyup input click", function() {
// 	var searchval = this.value;
//     if(this.value.length >= 1){
//         $.ajax({
//             type: 'post',
//             url: "search.html", //Путь к обработчику
//             data: {'serchinput':this.value},
//             response: 'text',
//             success: function(data){
//             	data = JSON.parse(data);
            	
//             	var filter = [];
//             	// var searchvalLower = searchval.toLowerCase();
//             	for(var i in data){
// 					var name = data[i];
//             		if(name.toLowerCase().indexOf(searchval) > -1){
// 						filter.push(name);
// 					}
//             	}
//             	// console.log(searchval);
//             	// console.log(filter);
//             	// console.log(data);

//             	var list = [];
//             	for(var i in filter){
//             		name = filter[i];
//             		name = name.split(searchval).join('<b>'+searchval+'</b>');
// 					list.push('<li>'+name+'</li>');
//             	}


//                 $(".search_result").html(list).fadeIn(); //Выводим полученые данные в списке
//            }
//        })
//     }
// })

$(".search_result").hover(function(){
    $("#search").blur(); //Убираем фокус с input
})
    
//При выборе результата поиска, прячем список и заносим выбранный результат в input
$(".search_result").on("click", "li", function(){
    s_user = $(this).text();
    $("#search").val(s_user); //деактивируем input, если нужно
    $(".search_result").fadeOut();
})



//Мобильное меню

$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $(".top-section nav ul").toggleClass('hidden');
});


$(".catalog-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $(".categories nav ul").toggleClass('hidden');
});



});
})(jQuery);