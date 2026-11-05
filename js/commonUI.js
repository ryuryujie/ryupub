$(function(){



	$('.pro-list .item').hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    });

})

function openModal(layer) {
	$(layer).modal({
		//closeExisting: false,
		//escapeClose: false,
		//clickClose: false
	});
} 
