// Function to toggle star color and favorite the pilot
function toggleStarColor() {
    const pilot = pilots[currentPilotIndex];
    const starIcon = document.querySelector('.star i');
    
    // Toggle star color
    starIcon.classList.toggle('yellow');

    // Toggle pilot's favorite state
    pilot.favorite = !pilot.favorite;
    updateFavoriteStar(pilot.favorite);
    saveFavorites();
}
