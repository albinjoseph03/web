$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        // event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	// function init() {
	// 	initEvents();
	// }



	function init() {
        if (window.innerWidth <= 768) {
            // Ensure menu is closed on mobile
            classie.remove(bodyEl, 'show-menu');
            isOpen = false;
        }
        initEvents();
    }

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		classie.add( bodyEl, 'show-menu' )
		isOpen = true;
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}
		openbtn = document.getElementById( 'open-button' )

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


