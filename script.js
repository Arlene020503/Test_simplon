// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Sélectionner le bouton par son ID
    const btnMessage = document.getElementById("btn-message");

    // Ajouter l'événement au clic
    if(btnMessage) {
        btnMessage.addEventListener("click", function() {
            alert("Merci de votre visite ! AR Tricot : À la limite de la perfection.");
        });
    }
});