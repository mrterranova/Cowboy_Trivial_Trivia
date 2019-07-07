
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
            choices: ["Tea Leaves", "Cactus Juice","Chewing Tobacco", "Flour"],
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
            choices: ["Virginia", "England", "Mexico", "Ohio" ],
            goodAnswer: "England"
        }, 
        {
            question: "Wild Bill Hickock was amongst the legendary gunfighters in the West. Legend has it that because of his love for the game of poker he died with what 4 cards in his hands which became known as the ‘Dead Man’s Hand’?", 
            choices: ["A pair of jacks and a pair of 10s", "A pair of kings, a jack, and a two", "A pair of 10s and a pair of aces", "A pair of eights and a pair of aces" ],
            goodAnswer: "A pair of eights and a pair of aces"
        }];

$('#startGame').on('click', function(){
  game.start();
});

var game = {
  correct: 0,
  incorrect: 0,
  counter: 90,
  // Setting my counter
  countDown: function(){
    game.counter--;
    $('#counter').html(game.counter)
    if(game.counter <= 0){
      game.completed();
    }
    if($('#complete').on('click', function(){
      game.completed();
    }));
  }}