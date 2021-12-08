(function ($) {
    "use strict";
    
		// nav area
		var $nav = $('#nav'),
            $navItem = $nav.find('.nav-item'),
            $mainNavItem = $nav.find('.main-nav-item'),
            $subNavItem = $nav.find('.sub-nav-item'),
            $content = $('#content'),
            $contentSection = $content.find('.content-section');
		
        $('.nav-item .sub-nav').slideUp();
        $('.nav-item.active .sub-nav').slideDown();
        
        // For Nav Item
		$mainNavItem.on('click', function(e){
            e.preventDefault();
            
            var $this = $(this);
			
            if( !$this.parent().hasClass('active')) {
                $this.siblings('.sub-nav').slideDown();
                $this.parent().addClass('active').siblings().removeClass('active').find('.sub-nav').slideUp();
            } else {
                $this.siblings('.sub-nav').slideUp();
                $this.parent().removeClass('active').find('.sub-nav').slideUp();
            }
            
		});
        
        
        // For Subnav Item
		$subNavItem.on('click', function(e){
            e.preventDefault();
            
            var $this = $(this),
                $thisTarget = $this.attr('href');
            
			$subNavItem.removeClass('active');
			$this.addClass('active');
			$($thisTarget).fadeIn().siblings('.content-section').hide();
            
            $("html, body").animate({ scrollTop: 0 }, 0);
            
		});
    
})(jQuery);