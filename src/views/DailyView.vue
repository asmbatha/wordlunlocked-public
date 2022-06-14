<template>
    <WonDialog v-if="won" :secrete="secrete" @close="won = false" />
    <LoseDialog v-if="lose" :secrete="secrete" @close="lose = false" />
    <div class="game">
        <header>
            <div class="title">Wordlunlocked #{{ gameId + 1 }}</div>
            <router-link to="/" class="close">
                <font-awesome-icon icon="close" size="2x" />
            </router-link>
        </header>
        <main>
            <div class="board-container">
                <div class="entries">
                    <div class="entry" :class="{
                        invalid: entry_id == target.row && invalid,
                        won: entry_id == target.row && won
                    }" v-for="(entry, entry_id) in entries" :key="'entry-' + entry_id">
                        <div class="tile" :class="[{ target: tile == targetTile }, tile.result]"
                            v-for="(tile, tile_id) in entry" :key="'tile-' + entry_id + tile_id">
                            {{ tile.letter }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="keyboard">
                <div class="row">
                    <button :class="keyCode[keyboard.q]" @click="gameInput('q')">q</button>
                    <button :class="keyCode[keyboard.w]" @click="gameInput('w')">w</button>
                    <button :class="keyCode[keyboard.e]" @click="gameInput('e')">e</button>
                    <button :class="keyCode[keyboard.r]" @click="gameInput('r')">r</button>
                    <button :class="keyCode[keyboard.t]" @click="gameInput('t')">t</button>
                    <button :class="keyCode[keyboard.y]" @click="gameInput('y')">y</button>
                    <button :class="keyCode[keyboard.u]" @click="gameInput('u')">u</button>
                    <button :class="keyCode[keyboard.i]" @click="gameInput('i')">i</button>
                    <button :class="keyCode[keyboard.o]" @click="gameInput('o')">o</button>
                    <button :class="keyCode[keyboard.p]" @click="gameInput('p')">p</button>
                </div>
                <div class="row">
                    <button :class="keyCode[keyboard.a]" @click="gameInput('a')">a</button>
                    <button :class="keyCode[keyboard.s]" @click="gameInput('s')">s</button>
                    <button :class="keyCode[keyboard.d]" @click="gameInput('d')">d</button>
                    <button :class="keyCode[keyboard.f]" @click="gameInput('f')">f</button>
                    <button :class="keyCode[keyboard.g]" @click="gameInput('g')">g</button>
                    <button :class="keyCode[keyboard.h]" @click="gameInput('h')">h</button>
                    <button :class="keyCode[keyboard.j]" @click="gameInput('j')">j</button>
                    <button :class="keyCode[keyboard.k]" @click="gameInput('k')">k</button>
                    <button :class="keyCode[keyboard.l]" @click="gameInput('l')">l</button>
                </div>
                <div class="row">
                    <button @click="gameInput('enter')" :disabled="entry.length != 5">enter</button>
                    <button :class="keyCode[keyboard.z]" @click="gameInput('z')">z</button>
                    <button :class="keyCode[keyboard.x]" @click="gameInput('x')">x</button>
                    <button :class="keyCode[keyboard.c]" @click="gameInput('c')">c</button>
                    <button :class="keyCode[keyboard.v]" @click="gameInput('v')">v</button>
                    <button :class="keyCode[keyboard.b]" @click="gameInput('b')">b</button>
                    <button :class="keyCode[keyboard.n]" @click="gameInput('n')">n</button>
                    <button :class="keyCode[keyboard.m]" @click="gameInput('m')">m</button>
                    <button @click="gameInput('delete')">delete</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { secreteWords, validWords } from '@/words'
import WonDialog from '@/components/WonDialog'
import LoseDialog from '@/components/LoseDialog'

export default {
    name: "DailyView",
    components: {
        WonDialog,
        LoseDialog
    },
    data() {
        return {
            date: Math.floor((new Date()).getTime() / (1000 * 3600 * 24)),
            gameId: null,
            invalid: false,
            lose: false,
            won: false,
            secrete: "",
            entries: [
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ],
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ],
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ],
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ],
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ],
                [
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    },
                    {
                        letter: "",
                        result: "",
                    }
                ]
            ],
            target: {
                row: 0,
                column: 0
            },
            keyboard: {
                q: 0,
                w: 0,
                e: 0,
                r: 0,
                t: 0,
                y: 0,
                u: 0,
                i: 0,
                o: 0,
                p: 0,
                a: 0,
                s: 0,
                d: 0,
                f: 0,
                g: 0,
                h: 0,
                j: 0,
                k: 0,
                l: 0,
                z: 0,
                x: 0,
                c: 0,
                v: 0,
                b: 0,
                n: 0,
                m: 0,
            },
            keyCode: [
                '',
                'absent',
                'present',
                'correct'
            ]
        }
    },
    computed: {
        targetTile() {
            const { row, column } = this.target
            return this.entries[row]?.[column]
        },
        entry() {
            return this.entries[this.target.row]?.map(({ letter }) => letter).join('') ?? ''
        }
    },
    mounted() {
        const startDate = Math.floor((new Date('06/15/2022')).getTime() / (1000 * 3600 * 24))
        const date = this.date

        const currentGame = localStorage.getItem(date)

        if (!currentGame) {
            this.gameId = (date - startDate) % secreteWords.length
            this.secrete = secreteWords[this.gameId];
            this.saveGame()
        } else this.loadGame(JSON.parse(currentGame))

        window.addEventListener("keyup", input => {
            if (input.repeat) return
            this.gameInput(input.key.toLowerCase())
        })
    },
    methods: {
        loadGame(game) {
            this.date = game.date
            this.gameId = game.gameId
            this.secrete = game.secrete
            this.entries = game.entries
            this.lose = game.lose
            this.won = game.won
            this.target = game.target
            this.keyboard = game.keyboard
            this.gameId = game.gameId
        },
        saveGame() {
            const currentGame = {
                date: this.date,
                gameId: this.gameId,
                secrete: this.secrete,
                entries: this.entries,
                lose: this.lose,
                won: this.won,
                target: this.target,
                keyboard: this.keyboard,
                gameId: this.gameId
            }
            localStorage.setItem(this.date, JSON.stringify(currentGame))
        },
        gameInput(key) {
            if (this.won || this.lose || typeof key !== 'string') return

            const action = key.toLowerCase()
            if (action.match(/[a-z]/i) && action.length == 1) this.setLetter(action)

            if (action == "enter") this.submit()

            if (action == "delete" || action == "backspace") this.backspace()
        },
        setLetter(letter) {
            if (!this.targetTile) return
            this.targetTile.letter = letter
            this.target.column++
        },
        submit() {
            if (!secreteWords.includes(this.entry) && !validWords.includes(this.entry)) {
                this.invalid = true

                setTimeout(() => {
                    this.invalid = false
                }, 2000);

                return
            }

            const secrete = this.secrete.split('')
            const entry = this.entries[this.target.row]

            entry.forEach((tile, index) => {
                if (secrete[index] != tile.letter) return

                tile.result = 'correct'
                secrete[index] = '_'
                this.updateKeyboard(tile.letter, 'correct')
            });

            {
                const secrete_set = new Set(secrete)
                if (secrete_set.size == 1 && secrete_set.has('_')) {
                    this.won = true
                    this.saveGame()
                    return
                }
            }

            entry.forEach((tile) => {
                if (!!tile.result) return
                const index = secrete.indexOf(tile.letter)
                if (index > -1) {
                    tile.result = 'present'
                    secrete[index] = '_'
                } else {
                    tile.result = 'absent'
                }
                this.updateKeyboard(tile.letter, tile.result)
            });
            this.target.row++
            this.target.column = 0

            if (this.target.row > 5) this.lose = true

            this.saveGame()
        },
        backspace() {
            if (this.target.column == 0) return
            this.target.column--
            this.targetTile.letter = ""
        },
        updateKeyboard(letter, result) {
            this.keyboard[letter] = Math.max({
                correct: 3,
                present: 2,
                absent: 1
            }[result] || 0, this.keyboard[letter] || 0)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'animate-css-mixins/animate.scss';

.game {
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

    .close {
        color: white;
        background: transparent;
        appearance: none;
        border: none;
        border-radius: 50%;
        width: 36px;
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;

        position: absolute;
        right: 12px;

        cursor: pointer;

        &:hover {
            background: rgba(255, 255, 255, .35);
        }
    }
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;

    .board-container {
        flex: 1;
        display: grid;
        place-items: center;
        width: 100%;

        .entries {
            display: grid;
            gap: 4px;
            width: 100%;
            height: calc(100% - 24px);
            max-height: min(100vw, 420px);

            grid-template-rows: repeat(6, 1fr);

            .entry {
                display: flex;
                justify-content: center;
                gap: 4px;
                position: relative;

                &.won {
                    @include animate__rubberBand;
                    animation-duration: 1000ms;
                }

                &.invalid {
                    @include animate__shakeX;
                    animation-duration: 800ms;

                    &:after {
                        content: "Not in word list";
                        padding: 12px;
                        background: var(--lightGray);
                        color: var(--black);
                        display: block;
                        position: absolute;
                        top: -12px;
                        border-radius: 4px;
                    }
                }

                .tile {
                    aspect-ratio: 1 / 1;
                    font-size: 2rem;
                    display: grid;
                    place-items: center;
                    text-transform: uppercase;
                    font-weight: bold;
                    background-color: var(--color-tone-7);
                    outline: 2px solid var(--color-tone-3);
                    outline-offset: -2px;
                    color: var(--color-tone-1);


                    &:empty {
                        outline-color: var(--color-tone-4);
                    }

                    &:not(:empty) {
                        @include animate__bounceIn;
                        animation-duration: 200ms;
                    }

                    &.target {
                        outline-style: dashed;
                    }

                    &.present {
                        background: var(--color-present);
                        outline: none;
                        @include animate__flipInX;
                        animation-duration: 600ms;
                    }

                    &.correct {
                        background: var(--color-correct);
                        outline: none;
                        @include animate__flipInX;
                        animation-duration: 600ms;
                    }

                    &.absent {
                        background: var(--color-absent);
                        outline: none;
                        @include animate__flipInX;
                        animation-duration: 600ms;
                    }
                }
            }
        }
    }

    .keyboard {
        display: grid;
        gap: 8px;
        padding-bottom: 12px;

        .row {
            display: flex;
            justify-content: center;
            gap: 8px;

            button {
                text-transform: uppercase;
                font-weight: 600;
                appearance: none;
                height: 58px;
                border-radius: 4px;
                border: none;
                padding: 0 8px;
                min-width: 42px;
                cursor: pointer;
                user-select: none;
                background-color: var(--key-bg);
                color: var(--key-text-color);
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;

                &:disabled {
                    opacity: .5;
                }

                &.present {
                    background: var(--color-present);
                }

                &.correct {
                    background: var(--color-correct);
                }

                &.absent {
                    background: var(--color-absent);
                }

                @media screen and (max-width: 480px) {
                    min-width: 42px;
                    min-width: 28px;
                    height: 36px;
                }
            }
        }
    }

}
</style>
