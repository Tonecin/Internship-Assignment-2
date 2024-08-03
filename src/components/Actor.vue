<template>
    <div v-show="!deleted">
      <span>
        <button @click="deleteActor">Delete</button>
      </span>
      <span>
        {{ actor }} 
      </span>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        actor: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const deleted = ref(false)

        const deleteActor = () => {
            deleted.value = true
        }

        return {
            deleted,
            deleteActor,
            actor: props.actor
        };
    }
}
</script>

<style scoped>
div {
    padding-left: 0.5cm;
}
</style>