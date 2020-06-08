//al click su icona hamburger appendo classe visible con proprietà display block
$(".fas.fa-bars").click(function() {

  $(".hamburger-menu").addClass("visible");

});

//al click su icona close rimuovo classe visible
$(".fas.fa-times").click(function() {

  $(".hamburger-menu").removeClass("visible");

});
