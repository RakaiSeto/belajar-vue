const app = Vue.createApp({
    data() {
        return {
            visible: true,
            text1Class: '',
            bgColor: ''
        }
    },
    computed: {
        visibility() {
            return {hidden: !this.visible}
        },
    },
    methods: {
        toggle() {
            this.visible = !this.visible
        },
        inputClass(event) {
            if (event.target.value === 'user1') {
                this.text1Class = 'user1'
            } else if (event.target.value === 'user2') {
                this.text1Class = 'user2'
            } else {
                this.text1Class = ''
            }
        },
        bgColorInput(event) {
            this.bgColor = event.target.value
        }
    },
})

app.mount('#assignment')