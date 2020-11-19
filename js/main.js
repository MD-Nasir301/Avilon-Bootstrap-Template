(function ($) {
  "use strict";

  // WOW active ========================================
  new WOW().init();

  // Global Variables
  var introHeight = $("#intro-sec").height();
  var headerHeight = $("#header").height();

  // Get Started btn function ===================================
  $(".getStarted").click(function () {
    $("html,body").animate(
      {
        scrollTop: introHeight - headerHeight, //there has two variables from "Global Variables"
      },
      100
    );
  });

  // Header  Background Add After Scroll =================================
  $(window).on("scroll", function () {
    if ($(window).width() > 991) {
      if ($(this).scrollTop() > 100) {
        $("#header").css({ top: "0px" });
        $(".header-bg").css({ height: headerHeight }); // "headerHeight" Global Variable From "Get Started btn function"
      } else {
        $("#header").css({ top: "10px" });
        $(".header-bg").css({ height: "0px" });
      }
    }
  });

  // Back-to-top Button Visible ======================================
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  // Back to top scroll function =====================================
  $(".back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  // FAQ Accordion Card Icon Change After Click ===============================
  $("#faq-sec .card-header .btn.btn-link").click(function () {
    $(this).toggleClass("active");
  });

  // Gallery - uses the magnific popup jQuery plugin ===========================
  $(".gallery-popup").magnificPopup({


    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  $('#menu').slicknav();

})(jQuery);
