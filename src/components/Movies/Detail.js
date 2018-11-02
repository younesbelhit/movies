import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class DetailMovie extends Component {


    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-6 offset-md-3">
                        <div className="card">
                        <img class="card-img-top" src={ (this.props.location.state.movie.poster_path != null) ? "http://image.tmdb.org/t/p/w780"  + this.props.location.state.movie.poster_path : "https://media.comicbook.com/files/img/default-movie.png"}  alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">{this.props.location.state.movie.title}</h2>
                                <p className="card-body">{this.props.location.state.movie.overview}</p>
                            </div>
                            <Link to={{ pathname: "/" }} className="btn btn-primary">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }


}

export default DetailMovie;
