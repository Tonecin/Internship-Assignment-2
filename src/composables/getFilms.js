import { ref } from 'vue'

const getFilms = ()  => {
    const films = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/films")
            if (! data.ok) {
                throw Error("No films found")
            }
            films.value = await data.json()
        }
        catch (err) {
            error.value = err.message
        }
    }

    return {films, error, load}
}

export default getFilms