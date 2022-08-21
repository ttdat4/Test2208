jQuery(function ($) {
    //Scroll mouse to full screen header
    var $jsHeader = $(".c-header");
    var $jsHeaderWrap = $(".l-headerwrap");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $jsHeader.addClass("is-header");
        $jsHeaderWrap.addClass("is-headerwrap");
      } else {
        $jsHeader.removeClass("is-header");
        $jsHeaderWrap.removeClass("is-headerwrap");
      }
    });

    //Click Navigation to open sidenav
    $(".c-header__itemnavbar").click(function(){
      $(".c-header__side").addClass("c-active");
    });

    $(".c-header__btnclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });

    $(".c-header__terserwrapclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });
  })


 
  