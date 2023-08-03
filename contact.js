var i = 0; // Point de départ
var images = []; // Tableau d'images
var time = 1000; // Temps de transition entre les images (1 seconde)

// Liste d'images
images[0] = "Logos/u-cons/logo-color.png";
images[1] = "Logos/u-tech/logo-color.png";
images[2] = "Logos/u-elec/logo-color.png";

// Fonction pour changer l'image
function changeImg(){
  // Changer l'image avec un effet de fondu
  $(document.slide).fadeOut(200, function(){
    $(document.slide).attr("src", images[i]);
    $(document.slide).fadeIn(2000);
  });

  // Vérifier si l'index est inférieur à la taille max du tableau d'images
  if(i < images.length - 1){
    // Ajouter 1 à l'index
    i++; 
  } else { 
	  // Réinitialiser l'index à 0
	  i = 0;
  }

  // Exécuter la fonction toutes les x secondes
  setTimeout(changeImg, time);
}

// Exécuter la fonction lorsque la page se charge
window.onload = changeImg;