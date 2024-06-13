$(document).ready(function() {
    var betCar; // Variable to store the user's bet on the car color
    var points = 0; // Variable to store the user's points
    var allWinActivated = false; // Flag to track if the 'all win' mode is activated

    // Event handler for selecting a car to bet on
    $('.betCar').click(function() {
        betCar = $(this).val(); // Stores the value of the selected car ('blue' or 'red')
        $('#raceButton').show(); // Shows the race button after a car is selected
    });

    var carBlueTime, carRedTime; // Variables to store race times for blue and red cars
    var carWidth = $('#carBlue').width(); // Width of the racing car image
    var raceTrackWidth = $('#raceTrack').width() - carWidth; // Width of the race track minus car width

    // Event handler for the race button click
    $('#raceButton').click(function() {
        race(false); // Initiates a race with 'all win' mode off
    });

    // Event handler for the 'all win' button click
    $('#allWinButton').click(function() {
        race(true); // Initiates a race with 'all win' mode on
    });

    // Event handler for the restart button click
    $('#restartButton').click(function() {
        // Resets UI elements and audio for a new race
        $('#result').hide();
        $('#output').html('');
        $('#restartButton').hide();
        $('.betCar').prop('checked', false); // Unchecks all car betting options
        $('#raceButton').removeClass('animated hinge').hide(); // Hides race button
        $('#allWinButton').hide(); // Hides 'all win' button
        document.getElementById('winSound').pause(); // Pauses win sound effect
        document.getElementById('winSound').currentTime = 0; // Resets win sound to beginning
        document.getElementById('allWinSound').pause(); // Pauses 'all win' sound effect
        document.getElementById('allWinSound').currentTime = 0; // Resets 'all win' sound to beginning
    });

    // Function to initiate the race
    function race(allWin) {
        allWinActivated = allWin; // Sets 'all win' mode based on parameter

        // Animates the race start with a delay and random duration for each car
        $('#raceButton').addClass('animated hinge');
        $('#allWinButton').addClass('animated hinge');

        carBlueTime = (Math.floor((Math.random() * 4) + 1)) * 1000; // Random race time for blue car
        carRedTime = (Math.floor((Math.random() * 4) + 1)) * 1000; // Random race time for red car

        // Resets initial position of cars
        $('#carBlue').css('left', '0');
        $('#carRed').css('left', '0');

        // Animates cars to the end of the race track based on calculated race times
        $('#carBlue').delay(1000).animate({
            left: raceTrackWidth
        }, carBlueTime);

        $('#carRed').delay(1000).animate({
            left: raceTrackWidth
        }, carRedTime);

        // Displays race result after animation completion
        setTimeout(function() {
            $('#result').show();

            // Determines race outcome based on which car reached the finish line first
            if (carBlueTime > carRedTime) { // Red car wins
                if (betCar == "red") { // User bet on red car
                    document.getElementById('winSound').play(); // Plays win sound effect
                    if (allWinActivated) { // 'All win' mode is activated
                        points *= 3; // Triples points
                        $('#output').html("Chance de Derrota é 0! Pontos triplicados!"); // Updates output text
                        document.getElementById('allWinSound').play(); // Plays 'all win' sound effect
                    } else {
                        points++; // Increases points by 1
                        $('#output').html("Roletou <br> e tirou JACKPOT!"); // Updates output text
                    }
                } else { // User did not bet on winning car
                    if (allWinActivated) { // 'All win' mode is activated
                        points = 0; // Resets points to zero
                        $('#output').html("Carro Vermelho Ganhou! Infelizmente... Mostre Todo Seu Fervor!!!"); // Updates output text
                        document.getElementById('allLose').play(); // Plays 'all lose' sound effect
                    } else {
                        $('#output').html("Carro Vermelho Ganhou ! Você Perdeu :( Mas, <br> nínguem termina no prejuizo!"); // Updates output text
                        document.getElementById('perdeu').play(); // Plays 'lose' sound effect
                    }
                }
            } else { // Blue car wins
                if (betCar == "blue") { // User bet on blue car
                    document.getElementById('winSound').play(); // Plays win sound effect
                    if (allWinActivated) { // 'All win' mode is activated
                        points *= 3; // Triples points
                        $('#output').html("Nas Apostas Você Lidera! Pontos triplicados!"); // Updates output text
                        document.getElementById('allWinSound').play(); // Plays 'all win' sound effect
                    } else {
                        points++; // Increases points by 1
                        $('#output').html("Resultado de Hoje ! <br> JACKPOT!"); // Updates output text
                    }
                } else { // User did not bet on winning car
                    if (allWinActivated) { // 'All win' mode is activated
                        points = 0; // Resets points to zero
                        $('#output').html("Carro Azul Ganhou! Método Martingale...!"); // Updates output text
                        document.getElementById('allLose').play(); // Plays 'all lose' sound effect
                    } else {
                        $('#output').html("Carro Azul Ganhou ! Você Perdeu :( Mas, <br> suas chances só aumentam!"); // Updates output text
                        document.getElementById('perdeu').play(); // Plays 'lose' sound effect
                    }
                }
            }

            // Updates displayed points after race
            $('#points').text("Pontos: " + points);

            // Shows or hides 'all win' button based on points
            if (points >= 1) {
                $('#allWinButton').show();
            } else {
                $('#allWinButton').hide();
            }

            allWinActivated = false; // Resets 'all win' mode flag
        }, 3000); // Time delay before displaying race result
    }
});
