var questions = [
  {
    question: "What is the name for the legendary shootout in which 8 lawmen and outlaws fought one another in Tombstone, Arizona Territory?",
    choices: ["Kansas City massacre", "Frisco shootout", "Goingsnake massacre", "OK Corral"],
    goodAnswer: "OK Corral"
  },
  {
    question: "Which of the following was NOT another title for ‘cowboy’?",
    choices: ["Cowhands", "Cowpunchers", "Cowkickers", "Buckaroos"],
    goodAnswer: "Cowkickers"
  },
  {
    question: "Who did the cowboys consider as the most important person in camp?",
    choices: ["The Cook", "The Wrangler", "The Women Folk", "The Trail Boss"],
    goodAnswer: "The Cook"
  },
  {
    question: "In the old west, whiskey sold at the saloons was made up of burnt sugar, alcohol, and what other ingredient?",
    choices: ["Tea Leaves", "Cactus Juice", "Chewing Tobacco", "Flour"],
    goodAnswer: "Chewing Tobacco"
  },
  {
    question: "What did the saloon girls typically carry on them for self-defense?",
    choices: ["Pistols", "Perfumes", "Whiskey Bottles", "Whistles"],
    goodAnswer: "Pistols"
  },
  {
    question: "Which animal is not native to the American West that populated there due to European settlers?",
    choices: ["Wild Horses", "Road-Runners", "Rattle Snakes", "Flying-Squirrels"],
    goodAnswer: "Wild Horses"
  },
  {
    question: "Alice Ivers, became known as ‘Poker Alice’ after moving West in 1865 and becoming quite well known for her skills in poker. Where was she born originally?",
    choices: ["Virginia", "England", "Mexico", "Ohio"],
    goodAnswer: "England"
  },
  {
    question: "Wild Bill Hickock was amongst the legendary gunfighters in the West. Legend has it that because of his love for the game of poker he died with what 4 cards in his hands which became known as the ‘Dead Man’s Hand’?",
    choices: ["A pair of jacks and a pair of 10s", "A pair of kings, a jack, and a two", "A pair of 10s and a pair of aces", "A pair of eights and a pair of aces"],
    goodAnswer: "A pair of eights and a pair of aces"
  }];

$('#startGame').on('click', function () {
  $('.game').css("display", "none");
  trivia.start();
});

$('#btnQuest').on('click', function() {
  console.log("hello");
  trivia.userName = $('.userName').val()
  console.log(trivia.userName);
  $('.hidden').css("display", "none");
  $('#theName').text(trivia.userName);
});

var trivia = {
  correct: 0,
  incorrect: 0,
  counter: 90,
  userName: "",
  // Setting my counter
  countDown: function () {

    trivia.counter--;
    $('#counter').html(trivia.counter)
    if (trivia.counter <= 10) {
      console.log($('#counter'));
      $('#counter').css("color", "red");
      $('#counter').css("size", "70px");
    }

  if (trivia.counter <= 0) {
      trivia.completed();
    }

    if ($('#complete').on('click', function () {
      trivia.completed();
    }));
  },
  // start the game with a timer and add all the questions and answers
  start: function () {
    $('.leftImg').css("overflow","visible");
    timer = setInterval(trivia.countDown, 1000);
    $('#questionaire').prepend('<h2 id="secondsRemaining">Time Remaining: <span id="counter">90</span> Seconds</h2>');
    $('#startGame, .triva').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#questionaire').append('<br><h3>' + questions[i].question + '</h3>')
      for (var j = 0; j < questions[i].choices.length; j++) {
        $('#questionaire').append("<div class ='userInput'><input class='button' type='radio' name='q" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + " </button></div>");
      }
    }
    $('<br><br><button id="complete" class="completed-btn" type="button" name="button-completed">Finished Quiz</button>').appendTo('#questionaire');
  
    $("#complete").click(function () {
      obj.pause();
    });

  },

  completed: function () {

    //loop for determining the correct answers or incorrect answers per button.
    for (var i = 0; i < questions.length; i++) {
      $.each($('input[name="q' + i + '"]:checked'), function () {
        if ($(this).val() === questions[i].goodAnswer) {
          console.log($(this).val());
          console.log(questions[i].goodAnswer);
          trivia.correct++;
        }
        else {
          trivia.incorrect++;
        }
      });
    }
    // Tabulate results

    this.result();
  },
  // clear the timer
  result: function () {
    $('.leftImg').css("overflow","hidden");
    $('.leftImg').css("height", "170%");
    clearInterval(timer);    
    $('#questionaire h2').remove();
    if (trivia.correct >= 6) {
        $('#questionaire').html('<h2 class="results">Looks like there\'s a new sheriff in town!</h2> <br> <img src="assets/images/q8.gif" alt="high"><br>').addClass('finished');
        $('#questionaire').append('<img class = "sheriffBadge" src="assets/images/badge.png">');
        $('#questionaire').append('<h2 class="nameAttach1">'+trivia.userName+'</h2>');
    }
    else if (trivia.correct >= 4) {
      $('#questionaire').html('<h2 class="results">Better Luck Next Time, Cowboy!</h2> <br> <img src="assets/images/q2.gif" alt="mid"><br>').addClass('finished');
    }
    else {
      $('#questionaire').html('<h2 class="results">Best be leavin\' til ya know what you\'re doin\'!<br> <img src="assets/images/q1.gif" alt="low"><br>').addClass('finished');
    }
    $('#questionaire').append("<h3 class='results'>Questions Ya Done Well: " + this.correct + "</h3>");
    $('#questionaire').append("<h3 class='results'>Questions Ya Ain't Done Well: " + this.incorrect + "</h3>");
    // display all the Unanswered questions
    $('#questionaire').append("<h3 class='results'>Questions You Didn't Round Up: " + (questions.length - (this.incorrect + this.correct)) + "<h3>");
    $('#questionaire').append('<br><button id="restart" class="restart-btn" type="button" name="button-restart">Do it Again?</button>').appendTo('#questionaire');

    $('#restart').on('click', function () {
      $('#restart, .results').remove();
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.counter = 90;
      trivia.start();
    });
    $("#restart").click(function () {
      obj.play();
    })

  },

}
var obj = document.createElement("audio");
obj.src = "../audio/Whistle.mp3";
obj.volume = 0.1;
obj.autoPlay = true;
obj.preLoad = true;
obj.controls = true;

$("#startGame").click(function () {
  obj.play();
});
