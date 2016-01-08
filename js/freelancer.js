// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
	$(document).ready(init);
	function init()
	{
		//inicio de aplicación
		$("#main-menu ul li a").click(selectMenu);	
	};
	
	function selectMenu()
	{
	$("#main-menu ul li a").removeClass("active");
	$(this).addClass("active");
    };