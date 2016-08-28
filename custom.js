$(".navbar i").click(function(){
  if( $(this).hasClass("fa-bars") ){
    $(this).removeClass("fa-bars");
    $(this).addClass("fa-times");
    $(this).closest(".navbar").addClass("active");
  } else if( $(this).hasClass("fa-times") ){
    $(this).removeClass("fa-times");
    $(this).addClass("fa-bars");
    $(this).closest(".navbar").removeClass("active");
  }
})
