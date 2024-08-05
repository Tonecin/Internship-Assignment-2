<template>
    <div>
      <span>
        <button @click="deleteActor">Delete</button>
      </span>
      <span>
        {{ actor }} 
      </span>
    </div>
</template>

<script>

export default {
    emits: ['deleteActor'],
    props: {
        actor: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {

        const deleteActor = () => {
            emit('deleteActor', props.actor)
        }

        return {
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