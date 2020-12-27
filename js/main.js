$('.about-icon').on('click',() => {
    const about = $('#about').offset().top;
    $("html, body").animate({ scrollTop: about - 32 }, 200);
});

$('.skills-icon').on('click',() => {
    const skills = $('#skills').offset().top;
    $("html, body").animate({ scrollTop: skills - 32 }, 200);
});

$('.works-icon').on('click',() => {
    const works = $('#works').offset().top;
    $("html, body").animate({ scrollTop: works - 32 }, 200);
});

$('.contact-icon').on('click',() => {
    const contact = $('#contact').offset().top;
    $("html, body").animate({ scrollTop: contact}, 200);
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



// $('.popup').magnificPopup({
//   type: 'image',
// });

// popup = $('.mfp-zoom-out-cur').length;
// console.log(popup);
// if(popup == 0){
//     $(function(){
//         /* Modal2へのボタン押下時のイベント */
//         $('.popup').on('click', function() {
//             changeModal('MatchingPets', 'mfp-zoom-out-cur');
//             popup = 1;
//             console.log(popup);
//         });
//         /* モーダルの切り替え */
//         function changeModal(beforeModal, afterModal) {
//             $('#'+beforeModal).modal('hide');
//             $('.'+afterModal).modal('show');
//         }
//     });
// }else{
//     $('#MatchingPets').modal('show');
// }

