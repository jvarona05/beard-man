$(document).ready(function () {

    /*** sidebar menu section ***/

    //close the side bar if click the display
    $("#content").click(function(){
    	if(!$('#sidebar').hasClass('active'))
			toggleSideBar() 
	 })

    //buttons that close the sidebar
    $('.sidebarCollapse').on('click', function () {
    	setTimeout(function(){
    		toggleSideBar();
    	}, 5)
    });

    function toggleSideBar() 
    {
    	$('#sidebar').toggleClass('active');

        if ($(window).width() > 768) 
           $('#content').toggleClass('active');

        $('#content').toggleClass('blur');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }

    // transition between sections 
    $("#sidebar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

        setTimeout(function(){
            toggleSideBar();
        }, 1001)
     })

    /*** end sidebar menu section ***/

    // skills section - pie chart 
	$('.chart').easyPieChart({
        barColor : "#ff1c73",
        size: "200"
    });

    // work section - hover 
    $(' #work [class*="col-"] ').each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );
});