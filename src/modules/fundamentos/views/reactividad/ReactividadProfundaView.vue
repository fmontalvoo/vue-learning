<script setup lang="ts">
import { reactive } from 'vue';

const obj = reactive({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})

function mutateDeeply() {
    // estos funcionarán como se esperaba.
    obj.nested.count++
    obj.arr.push('baz')
}

// Proxy Reactivo vs. Original 

const raw = {}
const proxy = reactive(raw)

console.info(`proxy !== raw => ${proxy !== raw}`);

// llamar a reactive() en el mismo objeto devuelve el mismo proxy
console.group('1. llamar a reactive() en el mismo objeto devuelve el mismo proxy')
console.log(`reactive(raw) === proxy => ${reactive(raw) === proxy}`) // true
console.groupEnd()

// llamar a reactive() en un proxy devuelve ese mismo proxy
console.group('2. llamar a reactive() en un proxy devuelve ese mismo proxy')
console.log(`reactive(proxy) === proxy => ${reactive(proxy) === proxy}`) // true
console.groupEnd()

let state = reactive({ count: 0 })

// ¡Esto no funcionará!
state = { count: 1 }
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/reactivity-fundamentals.html#reactividad-profunda"
            target="_blank">
            <h2>Reactividad Profunda</h2>
        </a>
        <button @click="mutateDeeply">Mutate</button>
        <pre>{{ obj }}</pre>
        <button @click="state.count++">El contador esta en: {{ state.count }}</button>
    </main>
</template>