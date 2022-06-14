<template>
    <router-view />
</template>

<style lang="scss">
:root {
    --green: #6aaa64;
    --darkendGreen: #538d4e;
    --yellow: #c9b458;
    --darkendYellow: #b59f3b;
    --lightGray: #d8d8d8;
    --gray: #86888a;
    --darkGray: #939598;
    --white: #fff;
    --black: #212121;

    --color-tone-1: #ffffff;
    --color-tone-2: #818384;
    --color-tone-3: #565758;
    --color-tone-4: #3a3a3c;
    --color-tone-5: #272729;
    --color-tone-6: #1a1a1b;
    --color-tone-7: #121213;
    --color-nav-hover: #2f2f31;
    --opacity-50: rgba(0, 0, 0, 0.5);


    --color-present: var(--darkendYellow);
    --color-correct: var(--darkendGreen);
    --color-absent: var(--color-tone-4);
    --tile-text-color: var(--color-tone-1);
    --key-text-color: var(--color-tone-1);
    --key-evaluated-text-color: var(--color-tone-1);
    --key-bg: var(--color-tone-2);
    --key-bg-present: var(--color-present);
    --key-bg-correct: var(--color-correct);
    --key-bg-absent: var(--color-absent);
    --modal-content-bg: var(--color-tone-7);
}
</style>
