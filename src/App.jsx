import { useState, useEffect } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
/*
BONUS 1 ☺️

Stampare sia una lista delle attrici che degli attori, separatamente.

BONUS 2 😎

Stampare un’unica lista che contiene attori e attrici insieme!

BONUS 3 🤯

Aggiungere nella card dell’attore/attrice i film più famosi
*/


function App() {

  const [actors, setActors] = useState([])

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => setActors(res.data))
  }

  useEffect(() => { fetchActors() }, [])

  return (

    <div className='wrapper bg-primary'>
      <div className='container py-4'>
        <h1 className="text-center mb-4">Actors List</h1>
        <div className="row g-4">

          {
            actors.map(actor => (
              <div key={actor.id} className='col-sm-6 col-md-4 col-lg-3'>
                <div className='card shadow-lg h100'>
                  <img src={actor.image} alt={actor.name} className='card-img-top' />
                  <div className='card-body'>
                    <h3 className='card-title'>{actor.name}</h3>
                    <p className='card-text'><strong>Born:</strong> {actor.birth_year}, {actor.nationality}</p>
                    <p className='card-text'><strong>Bio:</strong> {actor.biography}</p>
                    <p className='card-text'><strong>Awards:</strong> {actor.awards.join(', ')}</p>
                    <p className='card-text'><strong>Most Famous Movie:</strong> {actor.known_for.join(', ')}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
