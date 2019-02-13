$(document).ready(function () {
    var beardsTypes = {
      "short" : "A short beard is an ideal choice for those who find that their beard grows in slowly or those who find that the upkeep of a longer beard is too much work for them. If you are more comfortable with a clean-cut, short style, then start checking out what short beard options are trending lately to narrow down your decision.",
      "medium" : "Do you like to have a bit more facial hair to show off, but without the commitment of a long and luxurious beard? With a medium beard, you can have just enough hair to run your fingers through – without enough to end up getting your fingers tangled in it. There are beard styles for medium beards ranging from sophisticated to rugged – and there’s surely one you’ll like and that will fit your preference.",
      "long" : "Whether you want to spot a hipster beard, a lumberjack beard, or replicate the old and wise look of Professor Dumbledore, a long beard can help you to do the trick. The looks you can accomplish with long facial hair span a wide range, and it’s no wonder so many people strive to replicate the possibilities. If you have the patience to grow out your beard to that length, and if you are dedicated to giving it the grooming and care that it will require, then a long beard just may be for you!",
      "year" : "A yeard is one of the biggest trends in beard growth – and it refers to growing out your beard for an entire year without touching it – to trim it, groom it, style it, or anything. Let nature take its course and discover the natural beard that your facial hair will form over the course of 365 days. Some truly incredible yeards have been the results of such experiments, and yours just may join the yeard hall of fame if you give it some time to form and take shape."
    } 

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


    // instanciate new modal
    var modal = new tingle.modal({
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    $('.beard-type').click(function(){
      let type = $(this).data('type')
      // set content
      modal.setContent(beardsTypes[type]);

      // open modal
      modal.open();
    })    
});