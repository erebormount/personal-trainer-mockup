$('document').ready(function(){
	$(".main-nav [href]").each(function(){
		if(this.href == window.location.href){
			$(this).addClass("page-Active");
		}
	})
});