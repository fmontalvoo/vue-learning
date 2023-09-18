<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({ count: 0 })

function increment() {
    state.count++
}
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/reactivity-fundamentals.html#declarando-el-estado-reactivo"
            target="_blank">
            <h2>Declarando el Estado Reactivo</h2>
        </a>
        <button @click="increment">El contador esta en: {{ state.count }}</button>
    </main>
</template>