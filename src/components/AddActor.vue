<template>
    <div v-show="!showForm">
        <button @click="addActor">Add Actor</button>
    </div>
    <div v-show="showForm">
        <div>
            Name: <input type="name" required v-model="name">
        </div>

        <button @click="submitForm">Submit</button>
        <button @click="closeForm">Cancel</button>
        <div v-show="errorMessage !== ''" class="error">
            {{ errorMessage }}
        </div>

    </div>
</template>

<script>

export default {
    emits: ['added'],
    data() {
        return {
            showForm: false,
            name: '',
            errorMessage: ''
        }
    },
    methods: {
        addActor() {
            this.showForm = true
        },
        closeForm() {
            this.showForm = false
            this.errorMessage = ''
            this.name = ''
        },
        submitForm() {
            if (this.name === '') {
                this.errorMessage = "Please input a name"
            }
            else {
                this.$emit('added', this.name)
                this.closeForm()
            }
        }
    }
}
</script>

<style scoped>
div {
    padding-left: 0.5cm;
}

</style>