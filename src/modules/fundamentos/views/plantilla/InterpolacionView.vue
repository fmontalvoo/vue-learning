<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const msg = ref('Hola Mundo!');
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#interpolacion-de-texto"
            target="_blank">
            <h2>Interpolación de Texto </h2>
        </a>
        <span>Mensaje: {{ msg }}</span>
        <button @click="counter++">El contador es: {{ counter }}</button>
    </main>
</template>