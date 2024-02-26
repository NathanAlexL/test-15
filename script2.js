// Fonction pour sauvegarder les données du compte dans le stockage local
function saveUserData(username, stats) {
    var userData = {
        username: username,
        stats: stats
    };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Fonction pour récupérer les données du compte depuis le stockage local
function getUserData() {
    var userData = localStorage.getItem('userData');
    if (userData) {
        return JSON.parse(userData);
    } else {
        return null;
    }
}

// Fonction pour charger les données du compte sur la page de redirection
function loadAccountData() {
    var userData = getUserData();
    if (userData) {
        document.querySelector('.username').innerText = userData.username;

        // Affichage des statistiques du compte
        var statsList = document.querySelector('.account-stats ul');
        statsList.innerHTML = '';
        for (var stat in userData.stats) {
            var listItem = document.createElement('li');
            listItem.innerText = stat + ': ' + userData.stats[stat];
            statsList.appendChild(listItem);
        }
    }
}

// Fonction pour gérer la connexion de l'utilisateur
function handleLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérification des données de connexion
    if (checkUsername(username) && password === "motdepasse") {
        // Réinitialisation du message d'erreur s'il existe
        document.getElementById("login-error").innerText = "";

        // Récupération des données du compte depuis le stockage local
        var userData = getUserData();
        if (!userData) {
            // Création d'un nouvel objet stats pour stocker les données du compte
            var stats = {
                "Nombre de cours publiés": 0,
                "Nombre total de vues et de mentions \"j'aime\"": 0,
                "Nombre de cours, de quizz et de vidéos visionnés": 0
            };
            // Sauvegarde des données du compte dans le stockage local
            saveUserData(username, stats);
        }

        // Redirection vers la page de redirection après la connexion
        window.location.href = "redirection_apres_connexion.html";
        return false; // Empêcher le formulaire de se soumettre normalement
    } else {
        // Affichage du message d'erreur
        document.getElementById("login-error").innerText = "Nom d'utilisateur ou mot de passe invalide";
        return false; // Empêcher la soumission du formulaire
    }
}

// Chargement des données du compte lorsque la page de redirection après la connexion est chargée
if (window.location.href.includes("redirection_apres_connexion.html")) {
    loadAccountData();
}
