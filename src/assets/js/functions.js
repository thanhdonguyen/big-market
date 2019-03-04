$(function(){
	$('.mini-cart').hover(function(){
      	$(this).closest('.header-top__cart')
      	.find('.cart-content')
      	.css('visibility','visible')
      	.show()
      	.addClass('is_cartHover');
    },function(){
      	$(this).closest('.header-top__cart')
      	.find('.cart-content')
      	.css('visibility','visible')
      	.hide()
      	.removeClass('is_cartHover');
    });

    $('.cart-content').hover(function(){
      	$(this).closest('.header-top__cart')
      	.find('.cart-content')
      	.css('visibility','visible')
      	.show()
      	.addClass('is_cartHover');
    },function(){
      	$(this).closest('.header-top__cart')
      	.find('.cart-content')
      	.css('visibility','visible')
      	.hide()
      	.removeClass('is_cartHover');
    });

    // ---------end menu top --------------

    $('#sliderlayer').nivoSlider({
        effect: 'random',
        animSpeed: 500,
        pauseTime: 8000
    });

    $('.partnerSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    });

    $('#bigSale_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="prev-sale"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-sale"><i class="fas fa-angle-right"></i></span>'
    });
    
    var scrollTopLast = 0;
    $(window).scroll(function () {
        // var widthDevice = $(window).width();
        if ($(window).scrollTop() > $('.header-top').height()) {
            $('.header-top').addClass('is_sticky');
            $('body').css('padding-top','110px');
        }else{
            $('.header-top').removeClass('is_sticky');
            $('body').css('padding-top','0');
        }

        var scrollTopNow = $(this).scrollTop();
        var $pageheader = $('.header-top');
        // Reveal sticky nav on scroll-up
        if(scrollTopNow > 700 && scrollTopNow > scrollTopLast) {
            //Scroll down
            $pageheader.addClass('is_sticky_hide');
        } else if(scrollTopNow < scrollTopLast) {
            //Scroll up
            $pageheader.removeClass('is_sticky_hide');
        }
        scrollTopLast = scrollTopNow;
    });

    // ----------------------------------

})