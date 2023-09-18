<script setup lang="ts">
import { ref } from 'vue';

const seen = ref(true);
const url = ref('https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#directivas');

const toggle = () => {
    seen.value = !seen.value;
}

const eventName = 'click';
const attributeName = 'href';
</script>

<template>
    <main>
        <a href="https://vue3-spanish.netlify.app/guide/essentials/template-syntax.html#directivas" target="_blank">
            <h2>Directivas</h2>
        </a>
        <p v-if="seen">Ahora me ves</p>
        <div>
            <!-- v-bind:args -->
            <a class="link" target="_blank" v-bind:href="url">Url 1</a>
            <a class="link" target="_blank" :href="url">Url 2</a>
            <!-- Argumentos dinamicos -->
            <a class="link" target="_blank" v-bind:[attributeName]="url">Url 3</a>
            <a class="link" target="_blank" :[attributeName]="url">Url 4</a>
        </div>
        <section>
            <!-- v-on:args -->
            <button v-on:click="toggle">Btn 1</button>
            <button @click="toggle">Btn 2</button>
            <!-- Argumentos dinamicos -->
            <button v-on:[eventName]="toggle">Btn 3</button>
            <button @[eventName]="toggle">Btn 4</button>
        </section>
        <section>
            <img src="/directive.png" alt="">
        </section>
    </main>
</template>

<style scoped>
.link {
    color: #42b983;
    text-decoration: none;
    margin: 5px;
}
</style>