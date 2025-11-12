import { useState, useEffect } from 'react'
import axios from "axios"
/*
Usate uno di questi due endpoint, a piacimento:

Lista di Attrici:   https://lanciweb.github.io/demo/api/actresses/

Lista di Attori:  https://lanciweb.github.io/demo/api/actors/

MILESTONE 1
Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici 
dalle API e stampiamoli in console.

MILESTONE 2

Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:

nome 👍
anno nascita 👍
nazionalità 👍
biografia 👍
immagine 👍
riconoscimenti

MILESTONE 3

Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!
*/


function App() {

  const [actors, setActors] = useState([])

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => setActors(res.data))
  }

  useEffect(() => { fetchActors() }, [])

  return (
    <div>
      <ul>
        {
          actors.map(actor => (
            <li key={actor.id}>
              <img src={actor.image} alt={actor.name} />
              <h3>{actor.name}</h3>
              <p><strong>Born:</strong> {actor.birth_year}, {actor.nationality}</p>
              <p><strong>Bio:</strong> {actor.biography}</p>
              <p><strong>Awards:</strong> {actor.awards.join(', ')}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
