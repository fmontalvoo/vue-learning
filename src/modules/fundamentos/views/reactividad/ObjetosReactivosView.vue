<script setup lang="ts">
import { ref, reactive } from 'vue';

const count = ref(0)
const state = reactive({
    count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
count.value = 2
console.log(state.count) // 2

const otherCount = ref(3)

state.count = otherCount
console.log(state.count) // 3
// la ref original está ahora desconectada de state.count
console.log(count.value) // 2

const books = reactive([ref('Vue 3 Guide')])
// necesita .value aquí
console.log(books[0].value)

const map = reactive(new Map([['count', ref(7)]]))
// necesita .value aquí
console.log(map.get('count')?.value)
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/reactivity-fundamentals.html#desempaquetando-ref-en-objetos-reactivos"
            target="_blank">
            <h2>Desempaquetando Ref en Objetos Reactivos</h2>
        </a>

        <p>count: {{ count }}</p>
        <pre>{{ state }}</pre>
    </main>
</template>