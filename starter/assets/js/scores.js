var highScore=document.getElementById("highscores");
endQuiz();
var checkScore=localStorage.getItem("score");
highScore.textContent=checkScore;

