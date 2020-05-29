(function ($) {
  "use strict";

  // AOS.init();
  ///////////////////////////
  // Кнопка navbar-collapse
  $("#nav .navbar__collapse").on("click", function () {
    $("#nav").toggleClass("open");
  });

  ///////////////////////////
  // Fixed
  $(window).on("resize load scroll", function () {
    var wWidth = $(this).width();
    var wScroll = $(this).scrollTop();

    wScroll > 1
      ? $("#nav").addClass("fixed-nav")
      : $("#nav").removeClass("fixed-nav");
  });

  ///////////////////////////
  // Tabs
  $("#products-tabs").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: "accordion", // Start closed if in accordion view
    tabidentify: "hor_1", // The tab groups identifier
    inactive_bg: "#fff",
  });

  ///////////////////////////
  // Fancybox
  $("a[rel=group1]").fancybox();
  $("a[rel=group2]").fancybox();
  $("a[rel=group3]").fancybox();
  $("a[rel=group4]").fancybox();
  $("a[rel=group5]").fancybox();
  $("a[rel=group6]").fancybox();
  $("a[rel=group7]").fancybox();
  $("a[rel=group8]").fancybox();
  $("a[rel=group9]").fancybox();

  ///////////////////////////
  // Slick Slider
  $("#slider-review").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
    dots: true,
    dotsClass: "dots dots-offset",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  ///////////////////////////
  // Callback
  $("#loading").hide();
  $("p.form-feedback").hide();

  $("#button").click(function () {
    $("div.form-item").addClass("has-error");
    $("p.form-feedback").show();
    $(this).addClass("form-button-loading");
    $("#submit").hide();
    $("#loading").fadeIn(400);
  });

  // Init fancybox
  // =============
  var selector = ".slick-slide:not(.slick-cloned)";

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on("click", ".slick-cloned", function (e) {
    $(selector)
      .eq(
        ($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length
      )
      .trigger("click.fb-start", {
        $trigger: $(this),
      });

    return false;
  });

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
	  speed: 400,
    // prevArrow:
    //   '<button type="button" class="single-gallery-prev"><i class="fa fa-chevron-left"></i></button>',
    // nextArrow:
    //   '<button type="button" class="single-gallery-next"><i class="fa fa-chevron-right"></i></button>',
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      dotsClass: "dots dots-offset",

      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
})(jQuery);
