// Accéder à un élément du DOM
const p = document.getElementById("text"); // avec ID (1 seul elmt)
console.log(p);

const p2 = document.getElementsByClassName("hehe"); // HTML Collection
console.log(p2); // renvoi un tableau (HTML Collection)

const lis = document.getElementsByTagName("li");
console.log(lis);

const p3 = document.querySelector("#text"); //
console.log(p3); // renvoi un seul élément

const liste = document.querySelectorAll("li"); // nodeList
console.log(liste);

// Attention NodeList n'est pas un tableaux
liste.forEach((li) => {
  console.log(li);
});
const array = Array.from(liste); // Cast en Array
const filteredLi = array.filter((li) => {
  return li.textContent.includes("attributs");
});

console.log(filteredLi);

// Modifier des élément du DOM

// modifier les attributs
p.setAttribute("class", "text-red-700");
// modifier le texte
p.textContent = "To be continued...";
// modifier un style
p.style.fontWeight = "bold";
p.style.fontSize = "2rem";
// ajouter un class
p.classList.add("bg-red-50");
p.classList.remove("text-red-700");
// Modifier le contenu HTML : Attention au faille XSS
//p.innerHTML = `<span>Hello word</span>`

// créer un élément
const span = document.createElement("span"); // creation balise span
span.textContent = "I am ";
p.appendChild(span);
const span2 = document.createElement("span");
span2.textContent = " The one";
p.insertBefore(span2, span);
// supprimer un élément
p.removeChild(span2);
// remplacer un élément
p.replaceChild(span2, span);
// cloner un élément
const clone = p.cloneNode(); // shallow
const clone2 = p.cloneNode(true); // deep
console.log(clone);

/**** Exercice
1. Créer un élément h1 avec le texte "Hello World"
2. Ajouter le à la balise body
3. Créer un élément p avec le texte "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
4. Ajouter le à la balise body
5. Créer un élément ul avec 3 li dedans
6. Ajouter le à la balise body
7. Créer un élément img avec l'attribut src="https://picsum.photos/200"
8. Ajouter le à la balise body
9. Créer un élément a avec l'attribut href="https://google.com" et le texte "Google"
10. Ajouter le à la balise body
11. Créer un élément button avec le texte "Cliquez moi"
12. Ajouter le à la balise body
13. Créer un élément div avec l'attribut id="container"
14. Ajouter le à la balise body
15. Créer un élément p avec le texte "Je suis un enfant"
16. Ajouter le à la balise div#container
17. Créer un élément button avec le texte "Cliquez moi"
18. Ajouter le à la balise div#container
**/

const vDiv = document.getElementById("exercice");

const vH1 = document.createElement("h1"); // cree h1
vH1.textContent = "Hello World"; // ajouter du text

vDiv.appendChild(vH1); // ajout de h1 dans la div

const vP = document.createElement("p"); // cree p
vP.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.";

vDiv.appendChild(vP);

const vUl = document.createElement("ul"); // creation de la liste
const vLi1 = document.createElement("li"); // creation des item
const vLi2 = document.createElement("li");
const vLi3 = document.createElement("li");

vLi1.textContent = "Li numéro 1 ";
vLi2.textContent = "Li numéro 2 ";
vLi3.textContent = "Li numéro 3 ";

vUl.appendChild(vLi1); // ajout
vUl.appendChild(vLi2);
vUl.appendChild(vLi3);
vDiv.appendChild(vUl);

const vImg = document.createElement("img"); // cree image
vImg.src = "https://picsum.photos/200"; // ajout de la source

vDiv.appendChild(vImg); // ajout au body

const vA = document.createElement("a"); // création du lien
vA.href = "https://google.com"; // ajout du lien cible
vA.textContent = "Google"; // ajout du text

vDiv.appendChild(vA);

const vButton = document.createElement("button");
vButton.textContent = "Cliquez moi";

vDiv.appendChild(vButton);

const vDivC = document.createElement("div");
vDivC.setAttribute("id", "container");

vDiv.appendChild(vDivC);

const vPEnfant = document.createElement("p");
vPEnfant.textContent = "Je suis un enfant";

const vButtonEnfant = document.createElement("button");
vButtonEnfant.textContent = "Cliquez moi";

vDivC.appendChild(vPEnfant);
vDivC.appendChild(vButtonEnfant);

vButton.setAttribute(
  "class",
  "bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
);
vButtonEnfant.setAttribute(
  "class",
  "bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
);

vDivC.setAttribute(
  "class",
  "block whitespace-pre bg-gray-100 shadow-lg my-2 italic text-lg"
);
/*
1. Créer un élément h1 avec le texte "Hello World"
2. Ajouter le à la balise body
*/
const body = document.querySelector("#exercice");
const titre = document.createElement("h1");
titre.textContent = "Hello World";
body.appendChild(titre);
/*
3. Créer un élément p avec le texte "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
4. Ajouter le à la balise body
*/
const text1 = document.createElement("p");
text1.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.";
body.appendChild(text1);
/*
5. Créer un élément ul avec 3 li dedans
6. Ajouter le à la balise body
*/
const uList = document.createElement("ul");
uList.appendChild(document.createElement("li"));
uList.appendChild(document.createElement("li"));
uList.appendChild(document.createElement("li"));
body.appendChild(uList);
/*
7. Créer un élément img avec l'attribut src="https://picsum.photos/200"
8. Ajouter le à la balise body
*/
const imgrandom = document.createElement("img");
imgrandom.setAttribute("src", "https://picsum.photos/200");
body.appendChild(imgrandom);
/*
9. Créer un élément a avec l'attribut href="https://google.com" et le texte "Google"
10. Ajouter le à la balise body
*/
const lienG = document.createElement("a");
lienG.setAttribute("href", "https://google.com");
lienG.textContent = "Google";
body.appendChild(lienG);
/*
11. Créer un élément button avec le texte "Cliquez moi"
12. Ajouter le à la balise body
*/
const btnTest = document.createElement("button");
btnTest.textContent = "Cliquez moi";
btnTest.setAttribute("class", "bg-red-200");
body.appendChild(btnTest);
/*
13. Créer un élément div avec l'attribut id="container"
14. Ajouter le à la balise body
*/
const divTest = document.createElement("div");
divTest.setAttribute("id", "container");
body.appendChild(divTest);
/*
15. Créer un élément p avec le texte "Je suis un enfant"
16. Ajouter le à la balise div#container
*/
const textdivChild = document.createElement("p");
textdivChild.textContent = "Je suis un enfant";
divTest.appendChild(textdivChild);
/*
17. Créer un élément button avec le texte "Cliquez moi"
18. Ajouter le à la balise div#container
*/
const btnTest2 = document.createElement("button");
btnTest2.textContent = "Cliquez moi";
btnTest2.setAttribute("class", "bg-red-500");
divTest.appendChild(btnTest2);

// créer un élément
const exo = document.getElementById("exo");
// 1-2
const h1Create = () => {
  const h1Element = document.createElement("h1"); //1. Créer un élément h1
  const h1TextNode = document.createTextNode("Hello World"); // Ajouter le texte "Hello World"
  h1Element.appendChild(h1TextNode);
  exo.appendChild(h1Element); // Ajouter l'élément h1 à la page
};
h1Create();

// 3-4
const pCreate = () => {
  const pElement = document.createElement("p"); //3. Créer un élément p
  const pTextNode = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
  ); //  Ajouter le texte
  pElement.appendChild(pTextNode);
  exo.appendChild(pElement); // Ajouter l'élément p
};
pCreate();

// 5-6
const ulCreate = (liItems = 3) => {
  // 5. Créer un élément ul avec 3 li dedans
  var ulElement = document.createElement("ul");
  for (var i = 1; i <= liItems; i++) {
    var liElement = document.createElement("li");
    liElement.textContent = "Item " + i;
    ulElement.appendChild(liElement);
  }
  // Ajouter ul à la div exo
  exo.appendChild(ulElement);
};
ulCreate();

// 7-8
const imgCreate = (url) => {
  var imgElement = document.createElement("img");
  imgElement.src = url;
  exo.appendChild(imgElement);
};
imgCreate("https://picsum.photos/200");

const ancreCreate = () => {
  var aElement = document.createElement("a");
  aElement.href = "https://google.com";
  aElement.textContent = "Google";

  exo.appendChild(aElement);
};
ancreCreate();

const btnCreate = () => {
  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Cliquez moi";

  exo.appendChild(buttonElement);
};
btnCreate();
