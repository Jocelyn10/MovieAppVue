import firebase from "./firebase"

const db = firebase.firestore().collection('movies')

const moviesApi = {
    getMovies: async() => {
        const documents = await db.get()
        return documents.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    },
    addMovie: async() => {

    },
    getMovieById: async() => {

    },
    updateMovie: async() => {

    },
    deleteMovie: async() => {

    },
}

export default moviesApi