// déclaration des éléments du form
const resvForm = document.getElementById('resvForm'); // Récupération de l'élément du formulaire via son ID
const pays = document.getElementById('pays'); // Champ de saisie pour pays
const ville = document.getElementById('ville'); // Champ de saisie pour ville
const region = document.getElementById('region'); // Champ de saisie pour region
const errorMessage = document.getElementById('error-message'); // Élément où afficher les messages d'erreur

// Écouter l'événement submit
resvForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs
    const paysValue = pays.value.trim(); // Supprimer les espaces inutiles autour de la saisie
    const villeValue = ville.value.trim(); // Faire de même pour la ville
    const regionValue = region.value.trim(); // et la région
    // Validation simple
    if (paysValue === '' || villeValue === '' || regionValue === '') {
        // Vérifier si l'un des champs est vide
        errorMessage.textContent = "Tous les champs sont obligatoires."; // Message d'erreur pour champs vides
    } else if (usernameValue !== 'Senegal' || villeValue !== 'Dakar' || regionValue !== 'Dakar') {
        // Vérification des valeurs entrées contre des identifiants codés en dur
        errorMessage.textContent = "Les informations saisies ne correspondent pas!."; // Message d'erreur pour identifiants invalides
    } else {
        // Si tout est correct, supprimer les messages d'erreur
        errorMessage.textContent = "";

        // Redirection vers la page de tableau de bord
        window.location.href = URL'htmlsenegal.html';
    }
});
