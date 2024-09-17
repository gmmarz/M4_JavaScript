const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTljOWU5ZmM2NjUzNDVjODAzMmY1NGRiN2Q1NzBjYyIsIm5iZiI6MTcyNjUyNTAwMC4wOTY0ODgsInN1YiI6IjY2ZThhZGFhYmI4MzYxYTFkNmE5ZGQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wM_TZGOqXjWAWAPzS-YTLtyWt7OVRb44CGo1wNeS_4'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

async function buscarFilmesPeloFiltro(filtro = {}) {
    try {
        let requestUrl = `${API_URL}/discover/movie?language=pt-BR`;

        if (filtro.sortBy) {
            requestUrl += `&sort_by=${filtro.sortBy}`
        }

        if (filtro.genre) {
            requestUrl += `&with_genres=${filtro.genre}`
        }

        if (filtro.maxDate) {
            requestUrl += `&release_date.lte=${filtro.maxDate}`
        }

        const response = await fetch(requestUrl, {
            "headers": {
                "Authorization": `Bearer ${API_KEY}`
            }
        })

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return {
            results: []
        }
    }
}

const filter = {
    sortBy: "release_date.desc",
    maxDate: new Date().toISOString()
}