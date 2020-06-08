//per mostrare:
//affido evento click a selettore strutturale
$(".header-right > a").click(function() {

  //appendo classe active con propr. display block
  $(".hamburger-menu").addClass("active");

});

//per chiudere:
//affido evento click a selettore strutturale
$(".close").click(function() {

  //rimuovo classe active
  $(".hamburger-menu").removeClass("active");

});
