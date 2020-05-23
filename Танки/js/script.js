 $(document).ready(function () {


    


     $('#fullpage').fullpage({
        slidesNavigation: true,
        // slidesNavPosition: 'bottom',
        anchors:['firstPage', 'secondPage', 'thirdPage']
     });

     $(".scrollpanel").scrollpanel();

     $(".scrollpanel").scrollpanel({
        
              prefix: 'sp-'
        
            });

     




     
     
 })

// new fullpage('#fullpage', {
//     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true
// });

// //methods
// fullpage_api.setAllowScrolling(false);