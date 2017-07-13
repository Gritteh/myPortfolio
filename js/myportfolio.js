$(document).ready(function() {
  var menu = document.getElementsByClassName("menuIcon");
  var menuq = $("#menuid");
  var menuClick = document.getElementsByClassName("menuClicked");
  var nav = document.getElementsByTagName("nav");
  var header = document.getElementsByClassName("titleAndIcon");
  menu[0].addEventListener("click", function() {
    if ($(".titleAndIcon").hasClass("titleBorder")) {
      // nav[0].style.display = "flex";

      // $("#navid").addClass("menuClicked");
      // $("#navid").removeClass("menuUnclicked");
      $(".titleAndIcon").addClass("titleNoBorder");
      $(".titleAndIcon").removeClass("titleBorder");
      $("#navid").animate({

        top: "+=49px"
      }, 200);
      $(".main-wrapper").animate({
        top: "+=49px"
      }, 200);


      // header[0].style.borderBottom = "0px";
      console.log("clickclassadded");

    } else if ($(".titleAndIcon").hasClass("titleNoBorder")) {
      // nav[0].style.display = "none";
      // $("#navid").addClass("menuUnclicked");
      // $("#navid").removeClass("menuClicked");
      $("#navid").animate({
        top: "-=49px"
      }, 200);
      $(".main-wrapper").animate({
        top: "-=49px"
      }, 200);

      $(".titleAndIcon").addClass("titleBorder");
      $(".titleAndIcon").removeClass("titleNoBorder");
      // header[0].style.borderBottom = "10px";
      // header[0].style.borderStyle = "solid";
      // header[0].style.borderColor = "#24444c";
      console.log("unclick");
    }
    // $("nav").animate({
    //   top: "117px"
    // }, 500);


    console.log("clicked");
  });
  // menuClick[0].addEventListener("click", function() {
  //   nav[0].style.display = "none";
  //   nav[0].classList.add("menuUnclicked");
  //
  //   nav[0].classList.remove("menuClicked");
  // });

});
