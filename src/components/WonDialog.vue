<template>
    <div class="overlay">
        <div class="dialog">
            <header>
                <div class="title">You win</div>
                <button @click="$emit('close')" class="close">
                    <font-awesome-icon icon="close" size="2x" />
                </button>
            </header>
            <p>
                {{ secrete }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WonDialog",
    props: {
        secrete: {
            type: String,
            default: ''
        }
    },
    emits: ['close']
}
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--opacity-50);
    z-index: 1;
    display: grid;
    place-items: center;
}

.dialog {
    background: var(--modal-content-bg);
    width: calc(100% - 24px);
    max-width: 300px;
}


header {
    height: 52px;
    display: flex;
    place-items: center;
    justify-content: center;
    color: var(--color-tone-1);
    border-bottom: 1px solid var(--color-tone-4);
    position: relative;

    .title {
        font-weight: 700;
        font-size: 24px;
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

p {
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
}
</style>