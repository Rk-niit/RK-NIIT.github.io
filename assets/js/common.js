$(document).ready(function(e) {
	
	 $("div.descPledge").hide();
    $("input[name$='selector']").click(function() {
        var test = $(this).val();
        $("div.descPledge").hide();
        $("#" + test).show();
    });
 
	
    $('#animated-navicon').click(function(e) {
        $(this).toggleClass('opened')
		$('#menu').toggleClass('openedMenu')
    });
});