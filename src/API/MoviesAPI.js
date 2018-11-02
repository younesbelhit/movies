
class MoviesAPI {

    static getAllMovies(callback) {
        fetch('http://api.themoviedb.org/3/discover/movie?api_key=72049b7019c79f226fad8eec6e1ee889&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=false&page=2&primary_release_year=2018&fbclid=IwAR1fF_lBtZdUv0tt8ksinRu-PpPrax6OVJzxRvmoIFmkIMXTyDIj_rE-4_k')
        .then((movies) => movies.json())
        .then(movies => callback(movies))
        .catch(err => err)
    }

};

export default MoviesAPI;
