// check off todo by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("done");

});

$("ul").on("click","span",function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(600, function(){
		$(this).remove();

	});
})



$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
	var todoText = $(this).val();
		$("ul").append("<li><span class='del'>" + "<i class='fa fa-trash fa-lg' aria-hidden='true'></i>" + "</span> " + todoText + "</li>");
		$("input").val("");

	}


});

$(".fa-plus-circle").on("click", function(){
	$("input").fadeToggle();



});