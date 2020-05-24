 $(document).ready(function () {

    $('#fullpage').fullpage({
       slidesNavigation: true,
       // slidesNavPosition: 'bottom',
       anchors: ['firstPage', 'secondPage', 'thirdPage']
    });

    $(".scrollpanel").scrollpanel();

    $(".scrollpanel").scrollpanel({
       prefix: 'sp-'
    });

    $(function () {
       $("#my-accordion").accordion();
    });


    $('.langrage__box').click(function (event) {
       $('.langrage__box-eu,.langrage__box-na').toggleClass('langrage__box-active');
    });
 })
