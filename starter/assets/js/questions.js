var quizData=[
    {question:"Inside which HTML element do we put the JavaScript?",
    answer: ["<script>"],
    option: ["<script>","<js>","<scripting>","<javascript>"]
    },
    {question:"What is the correct place to insert a JavaScript in HTML?",
    answer: ["The <body> section"],
    option:["The <body> section",  "Both <head> and <body>","The <head> section","Does not matter!"]
    },
    {question:"How do you create a function in JavaScript?",
    answer:["function myFunction()"],
    option:["function: myFunction()","function= myFunction()","myFunction()","function myFunction()"]
    },
    {question:"How do you call a function named 'myFunction'?",
    answer: ["myFunction()"],
    option:["call myFunction()","call function myFunction()","myFunction()"]
    },
    ];
    
    // Calling the appropiate sections from HTML page which will be dynamically updated
    
    var startQuiz=document.getElementById("start");
    var panelQuiz=document.getElementById("questions");
    var displayQuestion=document.getElementById("question-title");
    var displayChoices=document.querySelector("#choices");
    var displayTime=document.querySelector("#time");
    var endScreen=document.getElementById("end-screen");
    var score=document.getElementById("final-score");
    
    
    var currentIndex=0;
    var finalScore=0;
    
    //The Quiz starts when Start Button is clicked

    startQuiz.addEventListener("click",showQuestions);

    function showQuestions(){
        panelQuiz.setAttribute("class","show");
        displayChoices.textContent= "";
        startTimer();
           
        if(currentIndex===quizData.length){
            endQuiz();
            return;
        }
        displayQuestion.textContent=quizData[currentIndex].question;
        showChoices();
        currentIndex++;
    }
    
    //function for timer and score
    var initialTime=90;
    function startTimer(){
        var timeInterval=setInterval(function(){
            displayTime.textContent=initialTime;
            if (initialTime<=0){
                clearInterval(timeInterval);
                endQuiz();
            }
            initialTime--;
            return initialTime;
        }, 1000);
       
       

    }
//function that shows the choices in buttons inside unordered list
    function showChoices(){
        var options = quizData[currentIndex].option;
        var olTag= document.createElement("ol");
            displayChoices.appendChild(olTag);
            options.forEach(function (option){
                var liTag = document.createElement("li");
                var button = document.createElement("button");
                button.textContent = option;
                button.addEventListener("click", function () {
                checkAnswer(option);
            });
            liTag.appendChild(button);
            olTag.appendChild(liTag);
        });
    }

//function for check answers entered by user and responding accordingly
function checkAnswer(selectedOption){
    var correctAnswer = quizData[currentIndex - 1].answer[0];//this is to ensure the answe is check against previous response by user

    if(selectedOption===correctAnswer){
        finalScore=finalScore+10;
        console.log("correct answer");
    }
    else{
        initialTime=initialTime-10;
        console.log("incorrect answer");
    } 
    showQuestions();


}
//When the game ends, it should display their score and give the user the ability to save their initials and their score
function endQuiz(){
    endScreen.setAttribute("class","show");
    panelQuiz.setAttribute("class","hide");
    // initialTime=finalScore;
    score.textContent=finalScore;
    localStorage.setItem("score", finalScore);
   


}