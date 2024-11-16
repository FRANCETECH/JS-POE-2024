const div = document.querySelector("#grandpa")
const form = document.querySelector("#pa")
const button = document.querySelector("#child")

// Event Bubbling
// Comportement de quasi tout les navigateur 
// de bas vers le haut jusqu'a la racine du document 
// div.addEventListener("click", function(event){
//     alert("div clicked")
//     console.log("this", this)
//     console.log("target", event.target)
//     console.log("currentTarget", event.currentTarget)
// })

// form.addEventListener("click", function(event){
//     alert("form clicked")
//     //event.stopPropagation()
//     console.log("this", this)
//     console.log("target", event.target)
//     console.log("currentTarget", event.currentTarget)
//     // this === currentTarget

// })

// button.addEventListener("click", function(event){
//     alert("button clicked")
//     console.log("this", this)
//     console.log("target", event.target)
//     console.log("currentTarget", event.currentTarget)
    
// })

// Event Capturing 
//// de haut en bas jusqu'au dernier enfant 
div.addEventListener("click", function(event){
    alert("div clicked")
    console.log("this", this)
    console.log("target", event.target)
    console.log("currentTarget", event.currentTarget)
}, true)

form.addEventListener("click", function(event){
    alert("form clicked")
    //event.stopPropagation()
    console.log("this", this)
    console.log("target", event.target)
    console.log("currentTarget", event.currentTarget)
    // this === currentTarget

},{
    capture: true
  })


button.addEventListener("click", function(event){
    alert("button clicked")
    console.log("this", this)
    console.log("target", event.target)
    console.log("currentTarget", event.currentTarget)
    
},{
    capture: true
  })


// Event Delegation 
/*Technique de gestion des événements dans laquelle 
il n'y a pas besoin d'ajouter des gestionnaires d'événements 
aux éléments enfants spécifiques 
au lieu de cela, l'événement est ajouté à un seul parent.
Cela fonctionne parce que les événements se propagent
de l'élément déclencheur vers le haut */
const ul = document.querySelector('ul')
ul.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI'){
        event.target.remove()
    }
})