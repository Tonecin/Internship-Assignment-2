<template>
    <div v-show="!showForm">
        <button @click="addFilm">Add Film</button>
    </div>
    <div v-show="showForm">
        <div>
            Title: <input type="title" required v-model="title">
        </div>
        <div>
            Year: <input type="year" required v-model="year">
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
        title: '',
        year: '',
        errorMessage: ''
        }
    },
    methods: {
        addFilm() {
            this.showForm = true
        },
        closeForm() {
            this.showForm = false
            this.errorMessage = ''
            this.title = ''
            this.year = ''
        },
        submitForm() {
            if (this.title === '') {
                this.errorMessage = "Please input a title"
            }
            else if (this.year === '') {
                this.errorMessage = "Please input a year"
            }
            else if (isNaN(this.year)){
                this.errorMessage = "Please input a valid year (number)"
            }
            else {
                this.$emit('added', {
                    title: this.title,
                    year: this.year,
                    actors: []
                })
                this.closeForm()
            }
        }
    }
}
</script>

<style>
</style>