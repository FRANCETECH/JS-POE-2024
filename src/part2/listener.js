/* code non bloquant 
window.addEventListener("load", function() {
    console.log("load");
})
window.addEventListener("DOMContentLoaded", function() {
    console.log("Dom loaded");
    // code bloquant
    console.log("hehehe");
    const btnElement = document.getElementById("btn")
    const playgroundElement = document.getElementById("playground")

   function handleClick() {
    console.log("heheheh");
    const pElement = document.createElement("p")
    pElement.classList.add('text-2xl', 'text-center', 'text-red-800', "my-2")
    pElement.textContent = "Le roi des pirates ça sera moi"

    playgroundElement.appendChild(pElement)
     // Memory leak (fuite mémoire)
    // GARBAGE COLLECTOR
    btnElement.removeEventListener("click", handleClick )
    }
 
    btnElement.addEventListener("click", handleClick)

}) // par tout de suite dans le Callback queue
*/

// avec Defer, le script est executé en déférer donc seulement
//lorsque le DOM est chargé
console.log("Dom loaded");
// code bloquant
console.log("hehehe");
const btnElement = document.getElementById("btn");
const playgroundElement = document.getElementById("playground");
const imgElement = document.getElementById("img");

function handleClick() {
  console.log("heheheh");
  const pElement = document.createElement("p");
  pElement.classList.add("text-2xl", "text-center", "text-red-800", "my-2");
  pElement.textContent = "Le roi des pirates ça sera moi";

  playgroundElement.appendChild(pElement);
  // Memory leak (fuite mémoire)
  // GARBAGE COLLECTOR
  btnElement.removeEventListener("click", handleClick);
}
btnElement.addEventListener("click", handleClick);

// Scroll
window.addEventListener("scroll", function () {
  console.log("scroll");
});
// Resize
window.addEventListener("resize", function () {
  const width = this.window.innerWidth;
  console.log("Width", width);
});
// Mouseover
imgElement.addEventListener("mouseover", function (event) {
  // console.log(event) // MouseEvent
  imgElement.classList.add("border-4", "border-cyan-800");
});

//MouseOut
imgElement.addEventListener("mouseout", function () {
  imgElement.classList.remove("border-4", "border-cyan-800");
});

// useCase
// Double click pour editer du texte
// selection de mon text dans le dom
const editableElement = document.querySelector(".editable-text");
editableElement.addEventListener("dblclick", function () {
  editableElement.setAttribute("contenteditable", true);
  editableElement.focus();
});
// Raccourci clavier Ctrl+T
window.addEventListener("keydown", function (event) {
  event.preventDefault(); // supprime le comportement par défaut
  if (event.key === "g" && event.ctrlKey) {
    console.log("Raccourci activer");
  }
});
// Drag and drop
const draggableElement = document.querySelector(".draggable");
let isDraggable = false;
let offsetY;
let offsetX;

draggableElement.addEventListener("mousedown", function (event) {
  console.log(event);
  isDraggable = true;
  // calculer la distance entre la souris et l'angle haut/gauche
  offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = event.clientY - draggableElement.getBoundingClientRect().top;

  console.log("OffsetX", offsetX);
  console.log("OffsetY", offsetY);
});

document.addEventListener("mousemove", function (event) {
  if (isDraggable) {
    draggableElement.style.left = event.clientX - offsetX + "px";
    draggableElement.style.top = event.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", function () {
  isDraggable = false;
});
