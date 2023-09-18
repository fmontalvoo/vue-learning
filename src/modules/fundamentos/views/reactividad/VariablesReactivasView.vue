<script setup lang="ts">
import { ref } from 'vue';

// ref() nos permite crear una "referencia" a cualquier valor y pasarla sin perder reactividad
const count = ref(0);

console.info(count)
console.info(count.value)

function increment() {
    count.value++;
}

let state = ref({ count: 0 })

// Esto funciona reactivamente
state.value = { count: 1 }

const object = { foo: ref(1) }
const { foo } = object
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/reactivity-fundamentals.html#variables-reactivas-con-ref"
            target="_blank">
            <h2>Variables Reactivas con ref()</h2>
        </a>
        <button @click="increment">
            El contador esta en: {{ count }} <!-- no es necesario .value -->
        </button>
        <br>
        <br>
        <button @click="state.count++">El contador esta en: {{ state.count }}</button>
        <br>
        <div>
            <!-- {{ object.foo + 1 }} Renderiza [object Object] -->
            {{ object.foo }}
            {{ object.foo.value }}
            <br>
            {{ foo + 1 }} <!-- Renderiza 2 -->
        </div>
    </main>
</template>