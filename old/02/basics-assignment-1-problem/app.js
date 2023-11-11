const app = Vue.createApp({
    data() {
        return {
            name: 'Rakai Seto',
            age: 17,
            url: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png'
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    },
})

app.mount('#assignment')