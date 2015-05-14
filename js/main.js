// My Main JavaScript

// Logic on how the pieces alternate turns

// Logic on how the game determines a winner or cats game

// Logic on how the game stats are saved

// If it's a cats game see if you can get the Arizona Wildcats logo to pop-up

// If time allows try and get a computer player option available


$(document).ready(function() {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    $('.gameboard').click(function() {

        if ($(this).hasClass('disable')) {
            alert("DOH!!! This space is already taken");
        } else if (count == 9) {
            alert("Cats Game!!!!");
        } else if (count % 2 == 0) {
            count++;
            $(this).text(o);
            $(this).addClass("disable o btn_o");
            if ($('#squareTL').hasClass('o') && $('#squareMT').hasClass('o') && $('#squareTR').hasClass('o') || $('#squareML').hasClass('o') && $('#squareM').hasClass('o') && $('#squareMR').hasClass('o') || $('#squareBL').hasClass('o') && $('#squareML').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareML').hasClass('o') && $('#squareBL').hasClass('o') || $('#squareMT').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBM').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareMR').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTL').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBR').hasClass('o') || $('#squareTR').hasClass('o') && $('#squareM').hasClass('o') && $('#squareBL').hasClass('o')) {
                alert("O Wins!!!");
                o_win++;
                $('#o_win').text(o_win);

            }
        } else if (count % 2 != 0) {
            count++;
            $(this).text(x);
            $(this).addClass("disable x btn_x");
            if ($('#squareTL').hasClass('x') && $('#squareMT').hasClass('x') && $('#squareTR').hasClass('x') || $('#squareML').hasClass('x') && $('#squareM').hasClass('x') && $('#squareMR').hasClass('x') || $('#squareBL').hasClass('x') && $('#squareML').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareML').hasClass('x') && $('#squareBL').hasClass('x') || $('#squareMT').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBM').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareMR').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTL').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBR').hasClass('x') || $('#squareTR').hasClass('x') && $('#squareM').hasClass('x') && $('#squareBL').hasClass('x')) {
                alert("X Wins!!!");
                x_win++;
                $('#x_win').text(x_win);
            }
        }
    });
    $("#reset").click(function() {
        $('.gameboard').text('+');
        $('.gameboard').removeclass('disable');
        $('.gameboard').removeclass('o');
        $('.gameboard').removeclass('x');
        $('.gameboard').removeclass('btn_o');
        $('.gameboard').removeclass('btn_x');
        count = 0;

    });

});