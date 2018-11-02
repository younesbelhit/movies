import React from 'react';
import { Link } from 'react-router-dom';

const ListMovies = (props) => (

    <div className="container-fluid">
        <div className="row">
            { 
                props.movies.map( movie => (
                    <div className="col-3" key={movie.id}>
                        <div className="card-group mb-2">
                            <div className="card">
                                <img class="card-img-top" src={ (movie.poster_path != null) ? "http://image.tmdb.org/t/p/w780"  + movie.poster_path : "https://media.comicbook.com/files/img/default-movie.png"}  alt="Card image cap" />
                                <div className="card-body">     
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">
                                     { (movie.overview.length > 100)? movie.overview.slice(0,100) + '...' : movie.overview }
                                    </p>
                                    <Link to={{ 
                                        pathname: "/detail/" + movie.id, 
                                        state: { movie: movie } 
                                    }} className="btn btn-primary">Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>

)

export default ListMovies;