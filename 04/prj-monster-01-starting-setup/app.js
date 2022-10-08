function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1,
            winner: null,
            logs: []
        }
    },

    methods: {
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.currentRound = 0
        },
        attackMonster() {
            if (this.currentRound < 3) {
                this.currentRound++
            }
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLog('Player', "attacked Monster by", attackValue + 'points')
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLog('Monster', "attacked Player by", attackValue + 'points')
        },
        specialAttack() {
            this.currentRound = 1
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.addLog('Player', "attacked Monster by", attackValue + 'points')
            this.attackPlayer()
        },
        healPlayer() {
            if (this.currentRound < 3) {
                this.currentRound++
            }
            const heal = getRandomValue(10, 18)
            if (this.playerHealth + heal > 100) {
                this.playerHealth = 100
            } else { 
                this.playerHealth += heal
            }
            this.addLog('Player', "healed", heal + ' points')
            this.attackPlayer()
        },
        surrender() {
            this.winner = 'monster'
        },
        addLog(who, what, value) {
            this.logs.unshift({
                who: who,
                what: what,
                value: value
            })
        },
        logColor(who) {
            if (who === 'Monster'){
                return {color: 'red'}
            } else {
                return {color: 'green'}
            }
        }
    },

    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        specialAttackRound() {
            if (this.currentRound === 3) {
                return false
            } else {
                return true
            }
        },
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (this.playerHealth <= 0 && value <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
})

app.mount('#game')