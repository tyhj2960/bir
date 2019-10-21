$(document).ready(function() {
    var mySwiper = new Swiper('.main_slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    //pc depth2 슬라이드
    $('.pc_gnb .gnb>li').on('mouseenter',function(){

        
        $(this).find('.depth2').stop().delay( 150).fadeIn(400);
        var depth2H = $(this).children('.depth2').height();
        $('#header .background_header').css('height',depth2H);
    });
 
    $('#header .pc_gnb .gnb>li').on('mouseleave',function(){
        $(this).find('.depth2').stop().hide();
        $('#header .background_header').css('height','10px');
    });
            
        
    

    
    
    ////// main gnb 슬라이드   /////
    $('#main .main_wrap .btn_tab li').on('click',function(e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
        var num = $(this).index();

        // 메인비쥬얼 슬라이더
        $('#main .main_wrap .slider_wrap .main_slider').eq(num).addClass('active').siblings().removeClass('active');
        
        mySwiper[1].update();
        mySwiper[2].update();
    });
            
          
    
    var mainSliderFn = function() {
        var mainSlider = $('#main .main_slider');
        var slideImg = $('#main .main_slider .swiper-slide img');

        $(window).resize(function() {
//            var winH = $(window).height();
            var winW = $(window).width() + 17;
//            mainSlider.height(winH);

            // winW가 1024이하면 슬라이더안쪽 이미지변경
            if(winW <= 767) {
                // 반복문으로 한번에 이미지경로 변경
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('pc','mobile');
                    slideImg.eq(i).attr('src',changeSrc);
                });
            } else {
                slideImg.each(function(i) {
                    var changeSrc = slideImg.eq(i).attr('src').replace('mobile','pc');
                    slideImg.eq(i).attr('src',changeSrc);
                });
            }
        }).trigger('resize');
    };
    mainSliderFn();
    
    
    
    
    
        
/////  모바일    //////
    
    $('#header .m_gnb .bottom_m_gnb_inner>li>a').on('click',function(){
        $(this).siblings().stop().toggleClass('active').parent().siblings().children().removeClass('active');
        
        if($('.depth2').hasClass('active')){
            $('#header.active .m_gnb').css('width','37%');
            console.log('sdfsdf');
            } else {$('#header.active .m_gnb').css('width','60%');}
    });   
    
    
    //타블렛 모바일 햄버거메뉴
    $('#header .btn_allMenu').on('click',function(){
        $('body, #header').stop().addClass('active');
        $('#header .dimm').fadeIn();

    })
    $('#header .m_gnb .btn_close, #header .dimm').on('click',function(){
        $('body, #header').stop().removeClass('active');
        $('#header .dimm').fadeOut();
        $('#header .m_gnb .bottom_m_gnb_inner .depth2').stop().removeClass('active');

    });
    
    
    //모바일 찾기버튼
    $('#header .btn_global_search').on('click',function(){
        $('body, #header .global_search_wrap').stop().addClass('active');
        $('#header .dimm').fadeIn();
    });
    
    $('#header .global_search_wrap .btn_close, .dimm').on('click',function(){
        $('body, #header .global_search_wrap').stop().removeClass('active');
        $('#header .dimm').fadeOut();
    });
    
    
});

    
    