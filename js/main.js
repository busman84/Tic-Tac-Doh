// My Main JavaScript

// Logic on how the pieces alternate turns

// Logic on how the game determines a winner or cats game

// Logic on how the game stats are saved

// If it's a cats game see if you can get the Arizona Wildcats logo to pop-up

// If time allows try and get a computer player option available

//--- Make it to where the game stops after someone wins by adding another class at the end of that function where it disables all peices

//--- Make it to where the cats game does happen early if homer goes first by making an if statement about if bender wins are greater than homer wins cats game happens at turn 10


$(document).ready(function() {
    var x = "x"
    var o = "o"
    var turn = 0;
    var benderWin = 0;
    var homerWin = 0;

    $('.gameboard').click(function() {

        if ($(this).hasClass('winning')) {
            alert("The game is over!!! Click the Start Over button to begin a new game!");
        } else if ($(this).hasClass('disable')) {
            turn--;
            alert("DOH!!! This space is already taken");
        } else if (turn % 2 == 0) {

            $(this).html('<img src="img/bender2.png" class="pics">');
            $(this).addClass("disable o");
            if ($('#squareTL').hasClass('o') && $('#squareTM').hasClass('o') && $('#squareTR').hasClass('o') || $('#squareML').hasClass('o') && $('#squareM').hasClass('o') && $('#squareMR').hasClass('o') || $('#squareBL').hasClass('o') && $('#squareBM').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareML').hasClass('o') && $('#squareBL').hasClass('o') || $('#squareTM').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBM').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareMR').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBL').hasClass('o')) {

                $('#benderDance').html('<img src="img/bite.png" class="twirl bendDance">');
                // alert(" Bite my shiny metal ass!!!");
                benderWin++;
                $('#benderWin').text(benderWin);
                $('.gameboard').addClass('winning');


            }
        } else if (turn % 2 != 0) {

            $(this).html('<img src="img/homer2.png" class="pics">');
            $(this).addClass("disable x");
            if ($('#squareTL').hasClass('x') && $('#squareTM').hasClass('x') && $('#squareTR').hasClass('x') || $('#squareML').hasClass('x') && $('#squareM').hasClass('x') && $('#squareMR').hasClass('x') || $('#squareBL').hasClass('x') && $('#squareBM').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareML').hasClass('x') && $('#squareBL').hasClass('x') || $('#squareTM').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBM').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareMR').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBL').hasClass('x')) {

                $('#homerDance').html('<img src="img/Woo.png" class="twirl homDance")>');
                // alert("DOH!!! I mean WooHoo!!!");
                homerWin++;
                $('#homerWin').text(homerWin);
                $('.gameboard').addClass('winning');

            }
        }
        turn++;
        if (benderWin > homerWin) {
            if (turn >= 10) {
                //alert('Cats Game!!!!')
                $('.gameboard').html('<img src="img/Cats.png" class="pics")>');
                $('#squareM').html("<span class='cats'> CATS GAME</span>");
                $('.gameboard').addClass('winning');
            }
           } 
           if (homerWin >= benderWin){

             if (turn >= 9) {
                $('.gameboard').html('<img src="img/Cats.png" class="pics")>');
                $('#squareM').html("<span class='cats'> CATS GAME</span>");
                $('.gameboard').addClass('winning');

            }

        }

    });
    $("#startOver").click(function() {
        $('.gameboard').text('');
        $('.gameboard').removeClass('disable');
        $('.gameboard').removeClass('o');
        $('.gameboard').removeClass('x');
        $('.gameboard').removeClass('winning');
        $('.bendDance').remove();
        $('.homDance').remove();
        if (benderWin > homerWin) {
            turn = 1;
        } else {
            turn = 0;
        }

    });

});