// Fonction pour vérifier si le nom d'utilisateur est déjà utilisé
function checkUsername(username) {
    // Simulation d'une liste de noms d'utilisateurs déjà enregistrés
    var registeredUsernames = ["utilisateur1", "utilisateur2", "utilisateur3"];

    // Vérification si le nom d'utilisateur est dans la liste
    if (registeredUsernames.includes(username)) {
        return true; // Nom d'utilisateur déjà utilisé
    } else {
        return false; // Nom d'utilisateur disponible
    }
}

// Fonction pour vérifier les données lors de la création d'un compte
function checkSignup() {
    // Récupération des valeurs des champs
    var newUsername = document.getElementById("new-username").value;

    // Vérification si le nom d'utilisateur est déjà utilisé
    if (checkUsername(newUsername)) {
        // Affichage du message d'erreur
        document.getElementById("signup-error").innerText = "Nom d'utilisateur invalide";
        return false; // Empêcher la soumission du formulaire
    } else {
        // Réinitialisation du message d'erreur s'il existe
        document.getElementById("signup-error").innerText = "";
        return true; // Autoriser la soumission du formulaire
    }
}

// Fonction pour vérifier les données lors de la connexion
function checkLogin() {
    // Récupération des valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérification si le nom d'utilisateur et le mot de passe correspondent à un compte déjà créé
    if (checkUsername(username) && password === "motdepasse") { // Remplacez "motdepasse" par le mot de passe attendu
        // Réinitialisation du message d'erreur s'il existe
        document.getElementById("login-error").innerText = "";
        return true; // Autoriser la soumission du formulaire
    } else {
        // Affichage du message d'erreur
        document.getElementById("login-error").innerText = "Nom d'utilisateur ou mot de passe invalide";
        return false; // Empêcher la soumission du formulaire
    }
}

// Fonction pour confirmer la déconnexion
function confirmLogout() {
    var confirmLogout = confirm("Voulez-vous vous déconnecter ?");
    if (confirmLogout) {
        // Redirection vers la page d'accueil
        window.location.href = "index.html";
    }
}
