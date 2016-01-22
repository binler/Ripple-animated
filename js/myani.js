


var box = $('.column');
var close = $('.btn_close');


box.each(function(){

	$(this).click(function(e){

		var offset = $(this).offset();
		var cContent = $(this).children('.column-log');

		var wX = e.pageX,
			wY = e.pageY;

		var relativeX = (wX - offset.left);
		var relativeY = (wY - offset.top);

		var box = this;

		var boxStyle = $(this).css(["background-color", "color"]);

		cContent.css({
			"background-color" : boxStyle["background-color"],
			"color" : boxStyle["color"]
		});

		$('.wrapper').find('svg').remove();
		$('.wrapper').append('<svg><circle cx="' + wX + '" cy="' + wY + '" r="'+0+'" ></circle></svg>');

		var circle = $('.wrapper').find('circle');
			circle.css({"fill" : boxStyle["background-color"]});


		circle.animate(
			{
				"r" : $(window).outerWidth()
			},
			{
				easing: "easeOutQuad",
				duration: 400,
					step : function(val){
						circle.attr("r", val);
					} 
			}
			

			);

		$(this).find('.column-log').delay(300).fadeIn(100);

	});

});


	close.click(function(){

		$('.wrapper').find('svg').remove();

	});

