const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTljOWU5ZmM2NjUzNDVjODAzMmY1NGRiN2Q1NzBjYyIsIm5iZiI6MTcyNjUyNTAwMC4wOTY0ODgsInN1YiI6IjY2ZThhZGFhYmI4MzYxYTFkNmE5ZGQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wM_TZGOqXjWAWAPzS-YTLtyWt7OVRb44CGo1wNeS_4'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'


function Filme(filme) {
    const parser = new DOMParser()

    const doc = parser.parseFromString(`
        <div class="filme">
            <img src="${IMAGE_URL}${filme.poster_path}" alt="" />
            <div>
                <h3>${filme.title}</h3>
                <p>${filme.overview}</p>
            </div>
        </div>
        `, 'text/html')

    return doc.body.firstChild
}

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
        return data.results
    } catch (error) {
        console.error(error)
        return []
    }
}


async function handleListarFilmesDiscover() {
    const filtro = {
        sortBy: "release_date.desc",
        maxDate: new Date().toISOString()
    }

    const filmes = await buscarFilmesPeloFiltro(filtro)

    const discoverSection = document.getElementById('discover')
    discoverSection.innerText = ''
    for (let filme of filmes) {
        discoverSection.appendChild(Filme(filme))
    }
}

async function handleListarFilmesDeAcao() {
    // 1. Construir o Filtro, passando o campo "genre"

    // 2. Façam uma requisição no thunder client, para descobrir qual é o identificador dos filmes de ação:
    // https://api.themoviedb.org/3/genre/movie/list?language=pt
}

async function handleListarFilmesDeComedia() {
    // 1. Construir o Filtro, passando o campo "genre"

    // 2. Façam uma requisição no thunder client, para descobrir qual é o identificador dos filmes de ação:
    // https://api.themoviedb.org/3/genre/movie/list?language=pt
}