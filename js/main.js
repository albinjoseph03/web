$(window).load(function(){
    $('#preloader').fadeOut('slow', function(){ $(this).remove(); });
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
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/
(function() {

    var bodyEl = document.body,
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        if (window.innerWidth <= 768) {
            // Ensure menu is closed on mobile when page loads
            bodyEl.classList.remove('show-menu');
            isOpen = false;
        }
		
	
        initEvents();

    }

    function initEvents() {
		if (!window.matchMedia("(max-width: 1024px)").matches) {
			bodyEl.classList.add('show-menu');
		}
		
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }
    }

    function toggleMenu() {
        if (isOpen) {
            bodyEl.classList.remove('show-menu');
        } else {
            bodyEl.classList.add('show-menu');
        }
        isOpen = !isOpen;
    }

    init();

})();
