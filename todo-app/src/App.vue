<script setup>
import TodoApp from "@/components/TodoApp.vue";
import {onMounted, ref} from 'vue'

const pageTitle = ref('Vue3 TODO');

// Set the initial page title
onMounted(() => {
    document.title = pageTitle.value
})

</script>

<template>
    <router-link to="/about">About</router-link>
    <TodoApp></TodoApp>
    <router-view></router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
