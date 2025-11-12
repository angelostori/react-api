import { useState, useEffect } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
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
    <div className='container'>
      <h1 className="text-center mb-4">Actor List</h1>
      <div className="row g-4">

        {
          actors.map(actor => (
            <div key={actor.id} className='col-sm-6 col-md-4 col-lg-3'>
              <div className='card shadow-sm h100'>
                <img src={actor.image} alt={actor.name} className='card-img-top' />
                <div className='card-body'>
                  <h3 className='card-title'>{actor.name}</h3>
                  <p className='card-text'><strong>Born:</strong> {actor.birth_year}, {actor.nationality}</p>
                  <p className='card-text'><strong>Bio:</strong> {actor.biography}</p>
                  <p className='card-text'><strong>Awards:</strong> {actor.awards.join(', ')}</p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
