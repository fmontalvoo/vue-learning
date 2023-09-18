<script setup lang="ts">
import { ref } from 'vue';

const rawHtml = ref(`<span style="color: red">Esto debería ser rojo.</span>`);
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#html-puro" target="_blank">
            <h2>HTML Puro</h2>
        </a>
        <p>Usando interpolación: {{ rawHtml }}</p>
        <!-- Utiliza v-html solo en contenido confiable y nunca en contenido proporcionado por el usuario. -->
        <p>Usando la directiva <b>v-html</b>: <span v-html="rawHtml"></span></p>
    </main>
</template>