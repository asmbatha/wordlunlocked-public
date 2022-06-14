<template>
    <div class="home">
        <header>
            <div class="title">Wordlunlocked</div>
        </header>
        <main>
            <button v-if="currentGame" @click="newGame(false)">Continue Game</button>
            <button @click="newGame(true)">New Game</button>
            <button @click="dailyChallenge">Daily Challenge</button>
        </main>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    data() {
        return {
            currentGame: false
        }
    },
    mounted() {
        let currentGame = localStorage.getItem('currentGame')
        if (typeof currentGame == 'string' && currentGame) {
            try {
                currentGame = JSON.parse(currentGame)
                if (currentGame?.target?.row && currentGame?.won == false && currentGame?.lost == false) this.currentGame = true
            } catch { }
        }
    },
    methods: {
        newGame(newgame = false) {
            if (newgame) localStorage.setItem('currentGame', "")
            this.$router.push({ name: 'play' })
        },
        dailyChallenge() {
            this.$router.push({ name: 'daily' })
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    height: 52px;
    display: flex;
    place-items: center;
    justify-content: center;
    color: var(--color-tone-1);
    border-bottom: 1px solid var(--color-tone-4);

    .title {
        font-weight: 700;
        font-size: 37px;
        line-height: 100%;
        letter-spacing: 0.01em;
    }
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex: 1;

    button {
        height: 4rem;
        padding: 0 36px;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>