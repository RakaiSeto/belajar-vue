const app = Vue.createApp({
    data() {
        return {
            goals: [],
            hidden: 'block',
            input: ''
        }
    },
    methods: {
        visible() {
            if (this.hidden === 'block') {
                this.hidden = 'none'
            } else {
                this.hidden = 'block'
            }
        },
        addGoal() {
            this.goals.push(this.input)
            this.input = ''
        }
    },
})

app.mount('#assignment')