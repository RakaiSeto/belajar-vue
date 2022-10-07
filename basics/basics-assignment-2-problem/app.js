const app = Vue.createApp({
    data() {
        return {
            inputOnly: '',
            confirmedInput: '',
            confirmed: ''
        }
    },

    methods: {
        alerting() {
            alert('Alerting');
        },

        entered(event) {
            this.inputOnly = event.target.value
        },

        inputKey(event) {
            this.confirmedInput = event.target.value
        },

        inputValue() {
            this.confirmed = this.confirmedInput
        }
    },
})

app.mount('#assignment')