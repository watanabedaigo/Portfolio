$('.about-icon').on('click',() => {
    const about = $('#about').offset().top;
    $("html, body").animate({ scrollTop: about - 20 }, 200);
});

$('.skills-icon').on('click',() => {
    const skills = $('#skills').offset().top;
    $("html, body").animate({ scrollTop: skills - 20}, 200);
});

$('.works-icon').on('click',() => {
    const works = $('#works').offset().top;
    $("html, body").animate({ scrollTop: works - 20 }, 200);
});

$('.contact-icon').on('click',() => {
    const contact = $('#contact').offset().top;
    $("html, body").animate({ scrollTop: contact - 20 }, 200);
});

$('.cover').hover(function(){
    $(this).css({
        'background-color':'dimgray',
        opacity:0.5,
    });
},function(){
    $(this).css({
        'background-color':'transparent',
        opacity:0,
    });
});