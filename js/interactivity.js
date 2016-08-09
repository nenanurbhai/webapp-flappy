
jQuery("#scoresbtn").on("click", function() {
    jQuery("#content").empty();
      $("#scoreBoard").toggle();
});

jQuery("#creditsbtn").on("click", function() {
      $("#scoreBoard").hide();
    jQuery("#content").empty();
    jQuery("#content").append(
        "<div>" + "Game created by Nena!" + "</div>"
    );
});

jQuery("#helpbtn").on("click", function() {
    $("#scoreBoard").hide();
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>" +
            "<li>" + "Press SPACE to flap your wings" + "</li>" +
            "<li>" + "Avoid the incoming pipes" + "</li>"+
        "</ul>"
    );
});


function registerScore(score){
  var playerName = prompt("What's your name?");
  var scoreEntry = "<p>" + playerName + ":" + score.toString() + "</p>";
 $("#scoreBoard").append(scoreEntry);
 game.state.restart();
}
