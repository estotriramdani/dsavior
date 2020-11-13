$(document).ready(function () {

  //navbar fix

  function getPos() {
    var Pos = $(window).scrollTop();
    return Pos;
  }

  $(window).scroll(function () {

    if (getPos() > 80) {
      $('nav').addClass('bg-light');
      $('nav').addClass('shadow-sm');
      $('nav').removeClass('p-3');
      $('.back-to-top').removeClass('d-none');
    } else if (getPos() < 80) {
      $('nav').removeClass('bg-light');
      $('nav').removeClass('shadow-sm');
      $('nav').addClass('p-3');
      $('nav').addClass('bg-putih');
      $('.back-to-top').addClass('d-none');
    }

  });

  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 700, function () {
      });
    } // End if
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });

  new WOW().init();

  //smooth scroll
  new ActiveMenuLink(".navbar", {

    // selector of menu item
    itemTag: "li",

    // active class
    activeClass: "active",

    // in pixels
    scrollOffset: 0,

    // duration in ms
    scrollDuration: 500,

    // easing function
    ease: "out-circ",

    // specifies the header height
    headerHeight: null,

    // string
    default: null,

    // shows hash tag
    showHash: false

  });

});