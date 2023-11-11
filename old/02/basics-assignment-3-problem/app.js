const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        number() {
            if (this.counter === 0) {
                return 0
            } else if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter > 37) {
                return "Too much!"
            } else {
                return this.counter
            }
        }
    },
    watch: {
        number() {
            const that = this
            setTimeout(() => {
                that.counter = 0
            }, 5000);
        }
    },
    methods: {
        add5() {
            this.counter += 5
        },
        add1() {
            this.counter++
        }
    },
})

app.mount('#assignment')