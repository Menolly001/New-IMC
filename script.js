// IMC = poids en kg / taille2 en m2
function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(imc) {
  // données pour le calcul
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
// selections

const calculateButton = document.getElementById("btn");

const number = document.querySelector(".number");

const text = document.querySelector(".text");

const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");

// evenement de clic sur le bouton "calculer"
calculateButton.addEventListener("click", function () {
  // récupérer les valeurs de taille et de poids
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // vérifier si les valeurs sont valides
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    number.textContent = "";
    text.textContent = "Veuillez entrer des valeurs valides.";
  } else {
    // calcul de l'IMC
    const imc = calculateBMI(height, weight);

    // afficher le résultat
    number.textContent = imc.toFixed(2);

    // obtenir la bonne catégorie d'IMC
    const bmiCategory = getBMICategory(imc);

    // mettre à jour la couleur du texte en fonction de la catégorie
    text.style.color = bmiCategory.color;

    // afficher la catégorie d'IMC
    text.textContent = `Catégorie IMC : ${bmiCategory.name}`;
  }
});

// événement keydown dans les inputs
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
