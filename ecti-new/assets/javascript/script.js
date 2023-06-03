$(document).ready(function(){
    

  $.ajax({
    method: "get",
    Headers:{
      "Access-Control-Allow-Origin":"https://www.ecti.co.in"
    },
    url: "https://ecti.co.in/config/fetch.php",
    success: function (data) {
      alert("Hello")
      $(".placement-carousel").append(data);
      $(".placement-carousel").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 4,
          },
        },
      });
    },
  });

  $.ajax({
    method: "get",
    Headers:{
      "Access-Control-Allow-Origin":"https://www.ecti.co.in"
    },
    url: "https://ecti.co.in/config/get-reviews.php",
    success: function (data) {
      $(".review-carousel").append(data);
      $(".data-course-review").append(data);
      $(".review-carousel").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
        },
      });
      $(".data-course-review").owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          481: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
        },
      });
    },
  });

  $(".founders").owlCarousel({
    dots: false,
    nav: false,
    items: 1,
    autoplay: true,
    loop: true,
  });
















    let ham=1;
    $(".ham").click(function(){
        if(ham==1){
            $('.mobile-menu').css({"left":"0"});
            $('body').css({"overflow":"hidden"});
            ham=2;
        }else{
            $('.mobile-menu').css({"left":"-100%"});
            $('body').css({"overflow-y":"scroll"});

            ham=1;
        }
    });



    $('.showsubnav-mobile').on('click', function() {
        $('.sub-nav-submobile').slideToggle(); // Toggle the visibility of the navigation menu
        $(this).find('i').toggleClass('rotate'); // Toggle the rotation class on the <i> tag
      });
      
  $('#second-nav ul li a').on('click', function(e) {
    // e.preventDefault(); // Prevent the default anchor click behavior
        $(".sub-nav-submobile").slideUp();
    var newContent = $(this).text(); // Get the text of the clicked anchor
    $('.btn-content').text(newContent); // Update the text of the button with the new content
    $(this).addClass('active').parent().siblings().find('a').removeClass('active'); // Add active class to clicked anchor and remove from siblings
  });
  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    var footerTop = $('footer').offset().top;
    $('#second-nav ul li a').each(function() {
      var target = $($(this).attr('href'));
      var targetTop = target.offset().top;
      var targetBottom = targetTop + target.outerHeight();

      if (scrollPos >= targetTop && scrollPos < targetBottom) {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active'); // Add active class to current anchor and remove from siblings
        $('.btn-content').text($(this).text()); // Update the button text with the active anchor's text
        return false; // Exit the loop once the active anchor is found
      }
    });
    if (scrollPos + $(window).height() >= footerTop) {
        // alert('Hii');
        $('.show-subnav-mobile').hide();
      } else {
        $('.show-subnav-mobile').show();
      }
});

    
  var dates = new Date();
  var year = dates.getFullYear();
  // console.log(year);
  document.querySelector(".year-js").innerText = year;
});