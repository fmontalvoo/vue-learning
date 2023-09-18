<script setup lang="ts">
import { ref } from 'vue';

const isButtonDisabled = ref(true);

const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#vinculacion-de-atributos"
            target="_blank">
            <h2>Vinculación de Atributos </h2>
        </a>
        <button :disabled="isButtonDisabled">Button</button>
        <h3>Vinculación Dinámica de Múltiples Atributos </h3>
        <div v-bind="objectOfAttrs">Esto debería tener un borde azul.</div>
    </main>
</template>

<style scoped>
.wrapper {
    margin: 10px;
    padding: 10px;
    border: 1px solid royalblue;
}
</style>