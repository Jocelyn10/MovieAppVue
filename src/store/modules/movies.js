import movieList from "../../helpers/movie-list"

const SET_SEARCH = "SET_SEARCH"

const state = {
    movies: movieList,
    search: ""
}

const mutations = {

}

const actions = {

}

const getters = {
    getMovies: state => {
        return state.movies
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}