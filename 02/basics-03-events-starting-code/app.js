const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 5,
            name: '',
            confirmedName: '',
            alertText: ''
        };
    },
    methods: {
        alert(event) {
          this.alertText = event.target.value
        },
        confirmName() {
          this.confirmedName = this.name
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            if (this.counter == 0) {
                this.counter = 0;
            } else {
                this.counter -= num;
            }
        },
        value(event) {
          this.name = event.target.value 
        },
        submitForm() {
          alert('Submitted: ' + this.alertText)
        }
    },
});

app.mount('#events');
