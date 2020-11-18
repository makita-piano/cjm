$(function(){
    /* menu */
    $(document).on('click','.menu-trigger',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-text').text("menu");
            $('.menu-container .menu').slideUp('1500');
        } else {
            $(this).addClass('active');
            $('.menu-text').text("close");
            $('.menu-container .menu').slideDown('1500');
        }
    });

    /* center-circle */
    $('.overlay').on('click',function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('main').removeClass('open');
            $('header').removeClass('open');
            $('.nav-right').removeClass('open');
        }
    });
});
