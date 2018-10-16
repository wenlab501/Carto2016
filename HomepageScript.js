$(function(){
  $('li').on("click",function(){
    var url;
    if ($(this).attr('id') == 'homepage')
      url = "Homepage.html";
    else if ($(this).attr('id') == 'team1')
      url = "Team1.html";
    else if ($(this).attr('id') == 'team2')
      url = "Team2.html";
    else if ($(this).attr('id') == 'team3')
      url = "Team3.html";
    else if ($(this).attr('id') == 'team4')
      url = "Team4.html";
    else if ($(this).attr('id') == 'team5')
      url = "Team5.html";
    else if ($(this).attr('id') == 'team6')
      url = "Team6.html";
    else if ($(this).attr('id') == 'team7')
      url = "Team7.html";
    else if ($(this).attr('id') == 'team9')
      url = "Team9.html";
    else if ($(this).attr('id') == 'team10')
      url = "Team10.html";
    else if ($(this).attr('id') == 'team11')
      url = "Team11.html";
    else if ($(this).attr('id') == 'team12')
      url = "Team12.html";
    else if ($(this).attr('id') == 'team13')
      url = "Team13.html";
    else if ($(this).attr('id') == 'reason')
      url = "Reason.html";
    else if ($(this).attr('id') == 'design')
      url = "Design.html";
    else if ($(this).attr('id') == 'message')
      url = "Message.html";
    else if ($(this).attr('id') == 'lab')
      url = "Lab.html";
    else if ($(this).attr('id') == 'staff')
      url = "Staff.html";
    $('#majorContent').load(url);
  });
});

$(function(){
  $('img').on("click",function(){
    var url;
    if ($(this).attr('id') == 'homePoster01')
      url = "Team5.html";
    else if ($(this).attr('id') == 'homePoster02')
      url = "Team12.html";
    else if ($(this).attr('id') == 'homePoster03')
      url = "Team6.html";
    else if ($(this).attr('id') == 'homePoster04')
      url = "Team4.html";
    else if ($(this).attr('id') == 'homePoster05')
      url = "Team7.html";
    else if ($(this).attr('id') == 'homePoster06')
      url = "Team10.html";
    $('#majorContent').load(url);
  });
});
