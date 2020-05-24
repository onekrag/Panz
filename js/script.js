 $(document).ready(function () {

    $('#fullpage').fullpage({
       slidesNavigation: true,
       anchors: ['firstPage', 'secondPage', 'thirdPage'],
      //  easingcss3: 'easeInOutCirc', 'transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860);'
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
