<script setup lang="ts">
import { reactive, nextTick } from 'vue';

const state = reactive({ count: 0 })

async function increment() {
    state.count++

    // Antes de la actualización del DOM
    console.log('Antes de la actualización del DOM ->', document.getElementById('counter')?.textContent) // 0

    await nextTick(() => {
        // acceder al DOM actualizado
        console.log('Contador: ', state.count)
    })

    // Después de la actualización del DOM
    console.log('Después de la actualización del DOM ->', document.getElementById('counter')?.textContent) // 1
}
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/reactivity-fundamentals.html#tiempo-de-actualizacion-del-dom"
            target="_blank">
            <h2>Declarando el Estado Reactivo</h2>
        </a>
        <button id="counter" @click="increment">El contador esta en: {{ state.count }}</button>
    </main>
</template>