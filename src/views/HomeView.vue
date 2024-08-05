<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div>
    <span>
      Search: 
      <input type="search" v-model="search">
    </span>
    <span>
      <label>Sort by: </label>
      <select v-model="sortBy">
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="year">Year</option>
      </select>
    </span>
  </div>
  <div>
    <AddFilm @added="addFilm"/>
  </div>
  <Film v-for="film in filteredFilms" :key="film.id" :film="film"/>

</template>

<script>
import Film from '@/components/Film.vue'
import getFilms from '@/composables/getFilms';
import AddFilm from '@/components/AddFilm.vue';
import { ref, computed } from 'vue'
// @ is an alias to /src

export default {
  components: {
    Film,
    AddFilm
  },
  setup() {

    // Load films
    const {films, error, load} = getFilms()
    const search = ref('')
    const sortBy = ref('')

    load()

    const addFilm = (film) => {
      films.value = [...films.value, film]
    }

    const filteredFilms = computed(() => {
      let preSort = films.value
      if (search.value !== '') {
        const query = search.value.toLowerCase();
        preSort = preSort.filter(film => 
          film.title.toLowerCase().includes(query) ||
          film.year.toString().includes(query) ||
          film.actors.some(actor => actor.toLowerCase().includes(query))
        )
      }
      if (sortBy.value === 'name') {
        return preSort.sort((a, b) => a.title.localeCompare(b.title))
      }
      else if (sortBy.value === 'year') {
        return preSort.sort((a, b) => a.year - b.year)
      }
      return preSort

    });

    return {
      error,
      addFilm,
      search,
      filteredFilms,
      sortBy
    }
  }
}
</script>

<style>
div {
  padding-top: 0.25cm;
  padding-bottom: 0.25cm;
}

div.error {
  color: red;
}

span {
  padding: 0.1cm;
}
</style>
