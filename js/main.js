// My Main JavaScript

// Logic on how the pieces alternate turns

// Logic on how the game determines a winner or cats game

// Logic on how the game stats are saved

// If it's a cats game see if you can get the Arizona Wildcats logo to pop-up

// If time allows try and get a computer player option available


$(document).ready(function() {
    var x = "x"
    var o = "o"
    var turn = 0;
    var benderWin = 0;
    var homerWin = 0;

    $('.gameboard').click(function() {


        if ($(this).hasClass('disable')) {
            turn--;
            alert("DOH!!! This space is already taken");
        } else if (turn % 2 == 0) {

            $(this).html('<img src="img/bender2.png" class="pics">');
            $(this).addClass("disable o");
            if ($('#squareTL').hasClass('o') && $('#squareTM').hasClass('o') && $('#squareTR').hasClass('o') || $('#squareML').hasClass('o') && $('#squareM').hasClass('o') && $('#squareMR').hasClass('o') || $('#squareBL').hasClass('o') && $('#squareBM').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareML').hasClass('o') && $('#squareBL').hasClass('o') || $('#squareTM').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBM').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareMR').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBL').hasClass('o')) {
                alert(" Bite my shine metal ass!!!");
                benderWin++;
                $('#benderWin').text(benderWin);
                $('.gameboard').text('');
                $('.gameboard').removeClass('disable');
                $('.gameboard').removeClass('o');
                $('.gameboard').removeClass('x');
                turn = 0;

            }
        } else if (turn % 2 != 0) {

            $(this).html('<img src="img/homer2.png" class="pics">');
            $(this).addClass("disable x");
            if ($('#squareTL').hasClass('x') && $('#squareTM').hasClass('x') && $('#squareTR').hasClass('x') || $('#squareML').hasClass('x') && $('#squareM').hasClass('x') && $('#squareMR').hasClass('x') || $('#squareBL').hasClass('x') && $('#squareBM').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareML').hasClass('x') && $('#squareBL').hasClass('x') || $('#squareTM').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBM').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareMR').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBL').hasClass('x')) {
                alert("DOH!!! I mean WooHoo!!!");
                homerWin++;
                $('#homerWin').text(homerWin);
                $('.gameboard').text('');
                $('.gameboard').removeClass('disable');
                $('.gameboard').removeClass('o');
                $('.gameboard').removeClass('x');
                turn = 1;
            }
        }
        turn++;
        if (turn >= 9) {
            alert('Cats Game!!!!')
        }

    });
    $("#startOver").click(function() {
      	$('.gameboard').text('');
        $('.gameboard').removeClass('disable');
        $('.gameboard').removeClass('o');
        $('.gameboard').removeClass('x');
        turn = 0;

    });

});