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
    
})