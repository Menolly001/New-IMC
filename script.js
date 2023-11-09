// IMC = poids en kg / taille^2 en m^2
function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(imc) {
  // Données pour le calcul
  if (imc < 18.5) {
    return { name: "Maigreur", color: "midnightblue" };
  } else if (imc < 25) {
    return { name: "Bonne santé", color: "darkgreen" };
  } else if (imc < 30) {
    return { name: "Surpoids", color: "crimson" };
  } else if (imc < 35) {
    return { name: "Obésité modérée", color: "blueviolet" };
  } else if (imc < 40) {
    return { name: "Obésité sévère", color: "purple" };
  } else {
    return { name: "Obésité morbide", color: "darkred" };
  }
}

// Sélections
const calculateButton = document.getElementById("btn");
const number = document.querySelector(".number");
const text = document.querySelector(".text");
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");

// Événement de clic sur le bouton "calculer"
calculateButton.addEventListener("click", function () {
  // Récupérer les valeurs de taille et de poids
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Vérifier si les valeurs sont valides
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    number.textContent = "";
    text.textContent = "Veuillez entrer des valeurs valides.";
  } else {
    // Calcul de l'IMC
    const imc = calculateBMI(height, weight);

    // Afficher le résultat
    number.textContent = imc.toFixed(2);

    // Obtenir la bonne catégorie d'IMC
    const bmiCategory = getBMICategory(imc);

    // Mettre à jour la couleur du texte en fonction de la catégorie
    text.style.color = bmiCategory.color;

    // Afficher la catégorie d'IMC sans le texte "Catégorie IMC"
    text.textContent = `${bmiCategory.name}`;
  }
});

// Événement keydown dans les champs de texte
heightInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateButton.click();
  }
});

weightInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateButton.click();
  }
});
