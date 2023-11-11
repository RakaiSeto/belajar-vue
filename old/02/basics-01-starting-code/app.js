const app = Vue.createApp({
    data() {
        return {
            vuelink: 'https://vuejs.org/',
            courseGoal: '<u>Finish the course and learn Vue!</u>',
            courseGoalA: '<u>Master Vue and build amazing app</u>',
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal
            } else {
                return this.courseGoalA
            }
        }
    },
})

app.mount('#user-goal')