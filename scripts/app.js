// SCRIPTS for Jake Snider Portfolio Site
   
$(document).ready(function(){
    $( "#profileImage" )
  .mouseenter(function() {
    $( this ).css({"border" : "solid teal 5px", "cursor" : "pointer"});
  })
  .mouseleave(function() {
    $( this ).css("border","solid white 5px");
  });
});

//SOLUTION FOR ROTATION FOUND HERE: https://stackoverflow.com/questions/21919044/css3-transition-on-click-using-pure-css
// SOLUTION AUTHOR: https://stackoverflow.com/users/914763/jeremyjjbrown

$( ".crossRotate" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(180deg)");
    } else {
        $(this).css("transform","");
    }
});

$(document).ready(function() {
  $( "#submitBtn" )
  .click(function() {
  alert("No server connection. To directly contact Jake Snider, Email: smokestacksandspires@gmail.com ");
  });
});

// $(document).ready(function(){
//     $( ".btn" )
//   .mouseenter(function() {
//     $( this ).css({"cursor" : "pointer"});
//   })
// });
