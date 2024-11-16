// Fonction constructeur 
function Ninja(name, age) {
    this.name = name;
    this.age = age
}

// sans le mot clé new 
function Ninja2(name, age) {
    let obj = {}
    obj.name = name;
    obj.age = age

    return obj
}


let madara =  new Ninja("Madara", 100)
let obito =  Ninja2("Obito", 33)

// Toutes en javascript ont un prototypes`
Ninja.prototype.sayHi = function() {
    console.log(`Hello my name is ${this.name}`)
}

madara.sayHi()

Ninja.prototype.village = "Konoha" 

function Uchiha(name, age, sharingan) {
    Ninja.call(this, name, age)
    this.sharingan = sharingan
}

let sasuke = new Uchiha('Sasuke', 17, "Mangekyou Sharingan")

// héritage 
Uchiha.prototype = Object.create(Ninja.prototype)
Uchiha.prototype.constructor = Uchiha

let itachi = new Uchiha('Itachi', 23, "Mangekyou Sharingan")

console.log(itachi.__proto__.__proto__) // Prototype de Ninja
// évite d'accéder directement à __proto__, on utilise plutot Object.getPrototypeOf()
console.log(Object.getPrototypeOf(itachi))

console.log(itachi.hasOwnProperty("name")) // true
console.log(itachi.hasOwnProperty("village")) // false

// on peut aussi verifier si un objet est le prototype d'un autre
Ninja.prototype.isPrototypeOf(itachi)
Uchiha.prototype.isPrototypeOf(itachi)
Object.prototype.isPrototypeOf(itachi)

let itachi2 = {...itachi} 
itachi2.__proto__ // Object 

let itachi3 = Object.create(itachi)
console.log(itachi3.__proto__) // itachi
console.log(itachi3.__proto__.__proto__) // Ninja
console.log(itachi3.__proto__.__proto__.__proto__) // Object
console.log(itachi3.__proto__.__proto__.__proto__.__proto__) // null

// HERITAGE
// ES6 

class Pirate {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    sayHi () {
        console.log(`Hello my name is ${this.name}`)
    }
}

let luffy = new Pirate("Luffy", 18)
let ussop = new Pirate("Ussop", 20)

console.log(typeof Pirate) // function 

luffy.__proto__  // Pirate
console.log(luffy.__proto__ === Pirate.prototype)
// Les classe en JS : Syntaxical sugar 
// héritage 
class Yonkou extends Pirate {
    constructor(nom, age, devilFruit, bounty) {
        super(nom, age)
        this.devilFruit = devilFruit
        this.bounty = bounty
    }
    // rédifinition de la méthode sayHi() : Polymorphisme
    sayHi() {
        return `Salut je suis ${this.name} et j'ai une prime de ${this.bounty}`
    }

}

let shanks = new Yonkou("Shanks", 40, "none", 40000000000)

class Mage {
    constructor(nom, magie) {
        this.nom = nom
        this.magie = magie
        this.lancerUnSort = this.lancerUnSort.bind(this) // on lie la fonction à son contexte
    }

    lancerUnSort() {
        return `${this.nom} lance le sort ${this.magie}`
    }
}

let natsu = new Mage("Natsu", "Dragon de feu")
let gray = new Mage("Gray", "Dome de Glace")

let natsuSort = natsu.lancerUnSort.bind(natsu)
let graySort = gray.lancerUnSort.bind(gray)

let natsuSort2 = natsu.lancerUnSort

// Encapsulation
// getter et setter 
class Witcher {

    #privacy = 34; // Pas officielle

    constructor(nom, age) {
        this._nom = nom // convention de nommage entre dev pour indiquer que la prop est privé
        this._age = age 
        this._level = 1
        this._nickName = "De Riv"
    }

    // getter : 
    get nom() {
        console.log("Récuparation du nom du sorceleur")
        return this._nom
    }

    // Setter : 
    set nom(newNom) {
        console.log("Modification du nom")
        this._nom = newNom
    }

    get age() {
        console.log("Récuparation de l'age du sorceleur")
        return this._age
    }

    set age(newAge) {
        console.log("Modification de l'age")
        if(newAge > this._age) {
            console.log("Le sorceleur viellit")
            this._level += 1
        }
        this._age = newAge

    }
}
let geralt = new Witcher("Geralt", 234)
geralt.nom // Récuparation du nom du sorceleur // "Geralt"
geralt.privacy

class Elf {
    constructor(nom) {
        this.nom = nom
    }

    static direBonjour() {
        console.log("Bonjour")
    }
}














