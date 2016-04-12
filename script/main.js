//JavaScript File
 $(function() {
         'use strict'; 
         controle.log("ready!");
         var currentSection="";
        
        changeContentSectionTo("#start");
        
        $("#menu-aboutme, menu-skills, #menu-education, #menu-hobby, #menu-contacts").click(funktion(event){
            var contentID = event.target.id.replace("menu-", "#");
            changeContentSectionTo(contentID, 700);
        });
        
        function changeContentSectionTo(sectionName, animationDuration) {
          if (currentSection !== sectionName) {
            $("#content").children().hide();
            $(sectionName).show(animationDuration ? animationDuration: 0, "linear");
            currentSection = sectionName;
          }
        }
});
 $('.carousel').carousel()
 $(document).ready(function(){
  $('#menu').mouseover(function(){
    $('#nav-menu').css('display','block');
  });
  $('.carousel').carousel({
    interval: 2000
  });
});
 
 
 
    $(document).ready(function(){
      $('#hobby').slick({
          arrows: true,
          autoplay: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
              {
                  breakpoints: 768,
                  settings: {
                      arrows: false,
                      dots: true,
                      centerMode: true,
                      centerPadding: '40'px,
                      slidesToShow: 2
                  }
              },
              {
                  breakpoint: 480,
              settings: {
                  arrows: false,
                  dots: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
            }
          ]
      });
        
      });
    