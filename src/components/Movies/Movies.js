import React, { Component, Fragment } from 'react';
import MoviesAPI from './../../API/MoviesAPI';
import ListMovies from './ListMovies';

class Movies extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        MoviesAPI.getAllMovies((movies) => {
            this.setState({ movies: movies.results })
        })
    }

    render() {
        return (
            <Fragment>
                <ListMovies movies={this.state.movies}/>
            </Fragment>
        );
    }


}

export default Movies;
