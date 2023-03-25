import express from "express"
import { get } from "http"
const app = express()
const port = 3005

app.get('/pessoas', (req, res) =>
{
    const Pessoa1 = 
    {
       nome: "Lucas",
       email: "lucas.email@email.com",
       idade: 20,
       hobbies: ["Jogar bola", "Ouvir música"]
    }

    const pessoa1Json = JSON.stringify(Pessoa1)
    res.setHeader("Content-Type", "application/json")
    res.send(pessoa1Json)
})

app.get('/listaPessoas', (req, res) =>
{
    const pessoa1 = 
    {
        nome: "Lucas",
       email: "lucas.email@email.com",
       idade: 23,
       hobbies: ["Jogar bola", "Ouvir música"]
    }
    
    const pessoa2 = 
    {
        nome: "livia",
       email: "livuia.email@email.com",
       idade: 26,
       hobbies: ["Jogar basquete", "Ouvir podcast"]
    }

    const pessoa3 = 
    {
        nome: "andre",
       email: "andre.email@email.com",
       idade: 21,
       hobbies: ["Jogar volei", "assistir series"]
    }

    const lista = [pessoa1, pessoa2, pessoa3]
    const listaJson = JSON.stringify(lista)
    res.setHeader("Content-Type", "application/json")
    res.send(listaJson)
})


app.listen(port, () =>
{
    console.log('App executando na porta ' + port)
})
