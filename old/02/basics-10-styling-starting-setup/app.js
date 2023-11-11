const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    methods: {
        selected(box) {
            if (box === 'a'){
                this.boxA = !this.boxA
            } else if (box === 'b'){
                this.boxB = !this.boxB
            } else if (box === 'c'){
                this.boxC = !this.boxC
            }
        }
    },
    computed: {
        boxAClass() {
            return {active: this.boxA}
        },
        boxBClass() {
            return {active: this.boxB}
        },
        boxCClass() {
            return {active: this.boxC}
        }
    },
})

app.mount('#styling')