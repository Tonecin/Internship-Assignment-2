
<template>
  <div v-show="!deleted">
    <span>
      <button @click="deleteFilm">Delete</button>
    </span>
    <span>
      {{ film.title }} ({{ film.year }})
    </span>
    <Actor v-for="actor in film.actors" 
    :key="actor"
    :actor="actor" 
    @deleteActor="deleteActor"/>
    <AddActor @added="addActor"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Actor from './Actor.vue';
import AddActor from './AddActor.vue';

export default {
  components: {
    Actor,
    AddActor
  },
  props: {
    film: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { film } = props;
    const deleted = ref(false)

    const addActor = (actor) => {
      film.actors.push(actor)
    }

    const deleteFilm = () => {
      deleted.value = true
    }

    const deleteActor = (actor) => {
      film.actors.splice(film.actors.indexOf(actor), 1)
    }

    return {
      film,
      deleted,
      deleteFilm,
      addActor,
      deleteActor
    };
  }
}
</script>