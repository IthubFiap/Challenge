// Função para alternar a cor da estrela e favoritar o piloto
function toggleStarColor() {
    const pilot = pilots[currentPilotIndex];
    const starIcon = document.querySelector('.star i');
    
    // Alterna a cor da estrela
    starIcon.classList.toggle('yellow');

    // Alterna o estado de favorito do piloto
    pilot.favorite = !pilot.favorite;
    updateFavoriteStar(pilot.favorite);
    saveFavorites();
}
