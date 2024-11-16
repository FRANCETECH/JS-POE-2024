 // XMLHttpRequest
    // FETCH API -> faciliter la communication HTTP 
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    // Librairie tiers : Axios, HttpDoc, abracaba

    // fetch(API_URL)
    // .then((res) => res.json())
    // .then((data) => console.table(data))
    // .catch((e) => console.log(e))

    // async await
    async function fetchData () {
        try {
            const res = await fetch(API_URL) // pause jusqu'au résolve()
            const posts = await res.json()
            console.log(posts);
    
        } catch (error) {
            console.log(error)
        } 
    } 

    // GENERATEUR CITATION KANYE WEST 
    const API_URL_KANYE = "https://api.kanye.rest/"

    // assigner les éléments du DOM
    const quoteText = document.getElementById("quote")
    const loader = document.getElementById("loading")
    const newQuoteBtn = document.getElementById("new-quote")
    // afficher un spinner
    function loading() {
        loader.hidden = false
        quoteText.hidden = true
    }
    // supprimer le spinner 
    function complete() {
        loader.hidden = true
        quoteText.hidden = false
    }
    // nouvelle citation
    function newQuote(quote) {
        if(!quote.length) {
            quoteText.textContent = "Pas de citation"
        } else {
            quoteText.textContent = `"${quote}"`
        }
    }
    // charger les citations depuis l'api
    async function getQuote() {
        // lancer le loading
        loading()
        try {
                const res = await fetch(API_URL_KANYE)
                const data = await res.json()
                newQuote(data.quote)
                complete() 
        } catch (error) {
            console.log(error)
        }
    }
    // ajouter un listener 
    newQuoteBtn.addEventListener('click', getQuote)
    // lancer la requete
    getQuote()

