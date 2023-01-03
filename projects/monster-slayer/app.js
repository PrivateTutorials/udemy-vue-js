function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // random rounded down value between min and max
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackDamage = getRandomValue(5, 12);
            this.monsterHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackDamage = getRandomValue(8, 15);
            this.playerHealth -= attackDamage;
            this.addLogMessage('monster', 'attack', attackDamage);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackDamage = getRandomValue(10, 25);
            this.monsterHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);

            // check we can't heal more than 100
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        startNewGame(){
            this.winner = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(whoMadeAction, action, value){
            this.logMessages.unshift({
                actionBy: whoMadeAction,
                actionType: action,
                actionValue: value
            })
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                console.log("aaaa");
                return {width: '0'}
            }
            return {width: `${this.monsterHealth}%`}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0'}
            }
            return {width: `${this.playerHealth}%`}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }

    }
});

app.mount('#game');
