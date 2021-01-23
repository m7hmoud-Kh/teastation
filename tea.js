$(function(){

    $("html").niceScroll({

        cursorcolor:"#698f3f",
        scrollspeed: "60"

    });
    

    $(".header").height($(window).height());
  



    $(".barr").click(function(){
 
        $(".menu").animate({

            left:'0px'
        },800);
         
 
    });

    $(".cross").click(function(){
 
        $(".menu").animate({

            left:'-254px'
        },800);
         

    });
          


    $(".sec3 .image").mouseenter(function(){

        $(".over-lay").css({
 
          height:'0%'
 
        });
 
     });

     $(".sec3 .image").mouseleave(function(){

        $(".over-lay").css({
 
          height:'100%'
 
        });
    });

});
