const pilots = [
    {
        name: "Sam Bird",
        image: "./assets/pilots-no-bg/Sam_Bird-removebg-preview.png",
        number: "8",
        numberColor: "var(--sam-bird-color)",
        victories: "12",
        podiums: "27",
        classification: "10th",
        bgColor: "var(--sam-bird-bg)",
        teamImage: "./assets/pilots-no-bg/Neon_Mclaren.png",
        favorite: false
    },
    {
        name: "Norman Nato",
        image: "./assets/pilots-no-bg/Norman_Nato-removebg-preview.png",
        number: "17",
        numberColor: "var(--norman-nato-color)",
        victories: "1",
        podiums: "2",
        classification: "13th",
        bgColor: "var(--norman-nato-bg)",
        teamImage: "./assets/pilots-no-bg/Andretti.png",
        favorite: false
    },
    {
        name: "MAXIMILIAN GÜNTHER",
        image: "./assets/pilots-no-bg/Maximilian_Günther-removebg-preview.png",
        number: "7",
        numberColor: "var(--maximilian-gunther)",
        victories: "5",
        podiums: "10",
        classification: "7th",
        bgColor: "var(--maximilian-gunther-bg)",
        teamImage: "./assets/pilots-no-bg/Maserati.png",
        favorite: false
    },
    {
        name: "JEAN-ÉRIC VERGNE",
        image: "./assets/pilots-no-bg/Jean-Éric_Vergne-removebg-preview.png",
        number: "25",
        numberColor: "var(--jean-eric-vergne)",
        victories: "11",
        podiums: "35",
        classification: "6th",
        bgColor: "var(--jean-eric-vergne-bg)",
        teamImage: "./assets/pilots-no-bg/Penske.jpg",
        favorite: false
    },
    {
        name: "SÉBASTIEN BUEMI",
        image: "./assets/pilots-no-bg/Sébastien_Buemi-removebg-preview.png",
        number: "16",
        numberColor: "var(--sebastien-buemi)",
        victories: "13",
        podiums: "31",
        classification: "15th",
        bgColor: "var(--sebastien-buemi-bg)",
        teamImage: "./assets/pilots-no-bg/Envision.png",
        favorite: false
    },
    {
        name: "LUCAS DI GRASSI",
        image: "./assets/pilots-no-bg/Lucas_Di_Grassi-removebg-preview.png",
        number: "11",
        numberColor: "var(--lucas-di-grassi)",
        victories: "13",
        podiums: "40",
        classification: "23th",
        bgColor: "var(--lucas-di-grassi-bg)",
        teamImage: "./assets/pilots-no-bg/ABT.jpg",
        favorite: false
    },
    {
        name: "SÉRGIO SETTE CÂMARA",
        image: "./assets/pilots-no-bg/Sergio_Sette_Câmara-removebg-preview.png",
        number: "3",
        numberColor: "var(--sergio-sette-camara)",
        victories: "0",
        podiums: "0",
        classification: "18th",
        bgColor: "var(--sergio-sette-camara-bg)",
        teamImage: "./assets/pilots-no-bg/ERT.png",
        favorite: false
    },
];

let currentPilotIndex = 0;

// Function to change the current pilot
function changePilot() {
    currentPilotIndex = (currentPilotIndex + 1) % pilots.length;
    updatePilotInfo();
}

// Function to update the pilot information in the DOM
function updatePilotInfo() {
    const pilot = pilots[currentPilotIndex];

    // Update the pilot image
    document.querySelector('.driver').src = pilot.image;

    // Update the pilot name
    document.querySelector('#pilot-name').textContent = pilot.name;

    // Update the pilot number and number color
    const pilotNumber = document.querySelector('#pilot-number');
    pilotNumber.textContent = pilot.number;
    pilotNumber.style.color = pilot.numberColor;

    // Update the number of victories, podiums, and classification
    document.querySelector('#vitorias').textContent = pilot.victories;
    document.querySelector('#podios').textContent = pilot.podiums;
    document.querySelector('#classificacao').textContent = pilot.classification;

    // Update the background of the driver-info section
    document.querySelector('.driver-info').style.background = pilot.bgColor;

    // Update the team image
    document.querySelector('.team').src = pilot.teamImage;

    // Update the color of the favorite star
    updateFavoriteStar(pilot.favorite);
}

// Function to update the color of the favorite star
function updateFavoriteStar(isFavorite) {
    const starIcon = document.querySelector('#favorite-star i');
    if (isFavorite) {
        starIcon.style.color = 'yellow';
    } else {
        starIcon.style.color = 'white';
    }
}

// Function to toggle the favorite state of the pilot
function toggleFavorite() {
    const pilot = pilots[currentPilotIndex];
    pilot.favorite = !pilot.favorite;
    updateFavoriteStar(pilot.favorite);
}

// Call the function initially to load the first pilot
updatePilotInfo();
