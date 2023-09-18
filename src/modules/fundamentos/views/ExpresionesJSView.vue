<script setup lang="ts">
const num = 1;

const ok = true;

const message = 'Hello World';

const id = 'container';

const date = new Date();

const toTitleDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES');
}
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#usando-expresiones-javascript"
            target="_blank">
            <h2>Usando Expresiones JavaScript</h2>
        </a>
        {{ num + 1 }}
        <br>
        {{ ok ? 'SI' : 'NO' }}
        <br>
        {{ message.split('').reverse().join('') }}
        <br>
        <div :id="`list-${id}`"></div>
        <br>
        <!-- esto es una declaración, no una expresión: -->
        <!-- {{ var a = 1 }} -->
        <!-- el control de flujo tampoco funcionará, usa expresiones ternarias -->
        <!-- {{ if (ok) { return message } }} -->
        <span :title="toTitleDate(date)">
            {{ formatDate(date) }}
        </span>
        <br>
        <p>{{ reversedList('Anita lava la tina') }}</p>
        <p>{{ variableGlobal }}</p>
    </main>
</template>