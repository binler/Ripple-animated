var box = $('.column');

box.each(function(){

	$(this).click(function(e){
		var offset = $(this).offset();
		var relativeX = (e.pageX - offset.left);
		var relativeY = (e.pageY - offset.top);

	})

});
