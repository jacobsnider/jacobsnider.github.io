
$(document).ready(function(){
    $( "#profileImage" )
  .mouseenter(function() {
    $( this ).css({"border" : "solid teal 5px", "transform" : "rotateX(360)"});
  })
  .mouseleave(function() {
    $( this ).css("border","solid white 5px");
  });
});
