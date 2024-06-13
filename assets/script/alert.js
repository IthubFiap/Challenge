Swal.fire({
    title: "Bem-Vindo!", // Title of the popup
    width: 600, // Width of the popup
    imageUrl: "./assets/img/FormulaE.png", // URL of the image to be displayed
    imageWidth: 450, // Width of the image
    imageHeight: 200, // Height of the image
    imageAlt: "Custom image", // Alternative text for the image
    background: "#1391D9", // Background color of the popup
    showConfirmButton: false, // Does not show the confirm button
    timer: 5000, // Time duration for which the popup is displayed (5 seconds)
    customClass: {
        // Custom classes to adjust the style of Swal content
        title: 'swal-title', // Class for styling the title
    },
});
