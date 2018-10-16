var color1 = '#E9485C'
var color2 = '#444554'

$('#feather1').mouseenter(function(){
  $('#list-content1').css("color", color1);
});
$('#feather1').mouseleave(function(){
  $('#list-content1').css("color", color2);
});

$('#feather2').mouseenter(function(){
  $('#list-content2').css("color", color1);
});
$('#feather2').mouseleave(function(){
  $('#list-content2').css("color", color2);
});

$('#feather3').mouseenter(function(){
  $('#list-content3').css("color", color1);
});
$('#feather3').mouseleave(function(){
  $('#list-content3').css("color", color2);
});

$('#feather4').mouseenter(function(){
  $('#list-content4').css("color", color1);
});
$('#feather4').mouseleave(function(){
  $('#list-content4').css("color", color2);
});

$('#feather5').mouseenter(function(){
  $('#list-content5').css("color", color1);
});
$('#feather5').mouseleave(function(){
  $('#list-content5').css("color", color2);
});

$('#feather6').mouseenter(function(){
  $('#list-content6').css("color", color1);
});
$('#feather6').mouseleave(function(){
  $('#list-content6').css("color", color2);
});

$('#sidebar').affix({
  offset: {
    top: $('header').height()
  }
});
