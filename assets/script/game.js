$(document).ready(function() {
    var betCar;
    var points = 0;
    var allWinActivated = false;

    $('.betCar').click(function() {
        betCar = $(this).val();
        $('#raceButton').show();
    });

    var carBlueTime, carRedTime;
    var carWidth = $('#carBlue').width();
    var raceTrackWidth = $('#raceTrack').width() - carWidth;

    $('#raceButton').click(function() {
        race(false);
    });

    $('#allWinButton').click(function() {
        race(true);
    });

    $('#restartButton').click(function() {
        $('#result').hide();
        $('#output').html('');
        $('#restartButton').hide();
        $('.betCar').prop('checked', false);
        $('#raceButton').removeClass('animated hinge').hide();
        $('#allWinButton').hide();
        document.getElementById('winSound').pause();
        document.getElementById('winSound').currentTime = 0;
        document.getElementById('allWinSound').pause();
        document.getElementById('allWinSound').currentTime = 0;
    });

    function race(allWin) {
        allWinActivated = allWin;
        $('#raceButton').addClass('animated hinge');
        $('#allWinButton').addClass('animated hinge');

        carBlueTime = (Math.floor((Math.random() * 4) + 1)) * 1000;
        carRedTime = (Math.floor((Math.random() * 4) + 1)) * 1000;

        $('#carBlue').css('left', '0');
        $('#carRed').css('left', '0');

        $('#carBlue').delay(1000).animate({
            left: raceTrackWidth
        }, carBlueTime);

        $('#carRed').delay(1000).animate({
            left: raceTrackWidth
        }, carRedTime);

        setTimeout(function() {
            $('#result').show();

            if (carBlueTime > carRedTime) {
                if (betCar == "red") {
                    document.getElementById('winSound').play();
                    if (allWinActivated) {
                        points *= 3;
                        $('#output').html("Chance de Derrota é 0! Pontos triplicados!");
                        document.getElementById('allWinSound').play();
                    } else {
                        points++;
                        $('#output').html("Roletou <br> e tirou JACKPOT!");
                    }
                } else {
                    if (allWinActivated) {
                        points = 0;
                        $('#output').html("Carro Vermelho Ganhou! Infelizmente... Mostre Todo Seu Fervor!!!");
                        document.getElementById('allLose').play();
                    } else {
                        $('#output').html("Carro Vermelho Ganhou ! Você Perdeu :( Mas, <br> nínguem termina no prejuizo!");
                        document.getElementById('perdeu').play();
                    }
                }
            } else {
                if (betCar == "blue") {
                    document.getElementById('winSound').play();
                    if (allWinActivated) {
                        points *= 3;
                        $('#output').html("Nas Apostas Você Lidera! Pontos triplicados!");
                        document.getElementById('allWinSound').play();
                    } else {
                        points++;
                        $('#output').html("Resultado de Hoje ! <br> JACKPOT!");
                    }
                } else {
                    if (allWinActivated) {
                        points = 0;
                        $('#output').html("Carro Azul Ganhou! Método Martingale...!");
                        document.getElementById('allLose').play();
                    } else {
                        $('#output').html("Carro Azul Ganhou ! Você Perdeu :( Mas, <br> suas chances só aumentam!");
                        document.getElementById('perdeu').play();
                    }
                }
            }

            $('#points').text("Pontos: " + points);
            $('#restartButton').show();

            if (points >= 1) {
                $('#allWinButton').show();
            } else {
                $('#allWinButton').hide();
            }

            allWinActivated = false;
        }, 3000);
    }
});
