import axios from "axios"

const root = document.querySelector(".root")
const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

const promise = axios.get(url)

promise.then((res) => {
    res.data.results.forEach(pokemon => {
        root.innerHTML += `<li>Nome: ${pokemon.name}</li>`
    })
})

promise.catch((err) => console.log(res.data.response))