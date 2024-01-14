var quizData=[
    {question:"Inside which HTML element do we put the JavaScript?",
    answer: ["<script>"],
    option: ["<script>","<js>","<scripting>","<javascript>"]
    },
    {question:"What is the correct place to insert a JavaScript in HTML?",
    answer: ["The <head> section"],
    option:["The <body> section",  "Both <head> and <body>","The <head> section","Does not matter!"]
    },
    {question:"How do you create a function in JavaScript?",
    answer:["function myFunction()"],
    option:["function: myFunction()","function= myFunction()","myFunction()"]
    },
    {question:"How do you call a function named 'myFunction'?",
    answer: ["myFunction()"],
    option:["call myFunction()","call function myFunction()","myFunction()"]
    },
    ];

    //The Quiz starts when Start Button is clicked

    var startQuiz=document.getElementById("start");
    var panelQuiz=document.getElementById("questions");
    var displayQuestion=document.getElementById("question-title");
    var displayChoices=document.querySelector("#choices");
    var displayTime=document.querySelector("#time");
    var currentIndex=0;
    
    startQuiz.addEventListener("click",showQuestions);

    function showQuestions(){
        panelQuiz.setAttribute("class","show");
        displayQuestion.textContent=quizData[currentIndex].question;
        startTimer();
        
       displayChoices.innerHTML = ""; // Clear previous choices

    }
    
    //function for timer and score
    var initialTime=60;
    function startTimer(){
        var timeInterval=setInterval(function(){
            displayTime.textContent=initialTime;
            if (initialTime<=0){
                clearInterval(timeInterval);
            }
            initialTime--;
        }, 1000);
        

    }
//function that shows the choices in buttons
    function showChoices(){



    }

//function for check answer
function checkAnswer(){



}
