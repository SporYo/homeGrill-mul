$(function() {

	// Custom JS
    $('.reviews__slick').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({scrollTop: dn}, 1000);
        });
    });

    const menuIcon = document.querySelector('.header__menu--icon')
    const menu = document.querySelector('.header__links')

    menuIcon.addEventListener('click', ()=> {
        menu.classList.toggle('hidden')
    })

});
