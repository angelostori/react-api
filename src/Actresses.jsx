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


function Actresses() {

    const [actresses, setActresses] = useState([])

    function fetchActresses() {
        axios.get('https://lanciweb.github.io/demo/api/actresses/')
            .then(res => setActresses(res.data))
    }

    useEffect(() => { fetchActresses() }, [])

    return (

        <div className='wrapper bg-danger'>
            <div className='container py-4'>
                <h1 className="text-center mb-4">Actresses List</h1>
                <div className="row g-4">

                    {
                        actresses.map(actress => (
                            <div key={actress.id} className='col-sm-6 col-md-4 col-lg-3'>
                                <div className='card shadow-lg h100'>
                                    <img src={actress.image} alt={actress.name} className='card-img-top' />
                                    <div className='card-body'>
                                        <h3 className='card-title'>{actress.name}</h3>
                                        <p className='card-text'><strong>Born:</strong> {actress.birth_year}, {actress.nationality}</p>
                                        <p className='card-text'><strong>Bio:</strong> {actress.biography}</p>
                                        <p className='card-text'><strong>Awards:</strong> {actress.awards}</p>
                                        <p className='card-text'><strong>Most Famous Movie:</strong> {actress.most_famous_movies[0]}</p>
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

export default Actresses
