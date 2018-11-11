$(document).ready(function() {
  /*Sticky Nav*/
  $(".js-section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );
  /*Scroll on buttons*/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
  /*Animations on scroll*/
  $(".js-wp-1").waypoint(
    function(direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%;"
    }
  );
  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%;"
    }
  );
  $(".js-wp-3").waypoint(
    function(direction) {
      $(".js-wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%;"
    }
  );
  $(".js-wp-4").waypoint(
    function(direction) {
      $(".js-wp-4").addClass("animated pulse");
    },
    {
      offset: "50%;"
    }
  );
  /*Mobile Navigation*/
  $(".js-nav-icon").click(function() {
    var nav = $(".js-main-nav");
    var icon = $(".js-nav-icon ion-icon");
    nav.toggleClass("showNav");

    if (icon.attr("name") === "menu") {
      icon.attr("name", " ");
      icon.attr("name", "close");
    } else {
      icon.attr("name", " ");
      icon.attr("name", "menu");
    }
  });
});
