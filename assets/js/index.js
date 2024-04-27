// façon optimisée
// sélectionne tout les élément avec la classe définie
const mouses = document.querySelectorAll(".mouse");
function moveHandler(e) {
  //Récupérer la position de défilement de la page
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  // foreach: pour chacun des éléments défini
  // pour chaque souris
  mouses.forEach((mouse) => {
    // Ajouter la position de défilement à la position de la souris
    if (e.type === "touchmove") {
      // si ses un événement tactile, utilisez les coordonnées du premier doigt
      const mouseX = e.touches[0].clientX + scrollX;
      const mouseY = e.touches[0].clientY + scrollY;

      // Déplacer l'élément selon la position du doigt
      mouse.style.top = mouseY + "px";
      mouse.style.left = mouseX + "px";
    } else {
      // sinon, utilisez les coordonnées de la souris
      const mouseX = e.clientX + scrollX;
      const mouseY = e.clientY + scrollY;

      mouse.style.top = mouseY + "px"; //déplace l'element verticalement et px ajoute l'unité px a la valeur de e.y ou e.x
      mouse.style.left = mouseX + "px"; // déplace l'element horizontalement
    }
  });
}
// Attacher le gestionnaire d'événement pour suivre le curseur
window.addEventListener("mousemove", moveHandler);
// Attacher le gestionnaire d'événement pour les appareils tactiles
window.addEventListener("touchmove", moveHandler);
// Attacher un gestionnaire d'événement pour le défilement de la page
window.addEventListener("scroll", moveHandler);
//   //pour que les element suive la souris
//   // window.addEventListener("mousemove", (e) => {
//   //   cursor.style.top = e.y + "px";
//   //   cursor.style.left = e.x + "px";

//   //   mouse1.style.top = e.y + "px";
//   //   mouse1.style.left = e.x + "px";

//   //   mouse2.style.top = e.y + "px";
//   //   mouse2.style.left = e.x + "px";
//   // });
const sidebar = document.getElementById("side-bar"); // un evenement pour la side bar
const content = document.querySelector(".header-text"); // autre endroit de la page

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active"); //sortir a side bar
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active"); //ranger la sidebar
});

// Priorités en CSS : !important > id > classe > baliseHtml
