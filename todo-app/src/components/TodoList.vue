<script setup>
import {useTodoListStore} from "@/store/useTodoListStore";
import {storeToRefs} from "pinia";

const store = useTodoListStore();
const {todoList} = storeToRefs(store);
const {toggleCompleted, deleteTodo} = store;

</script>

<template>
    <div v-for="todo in todoList" :key="todo.id">
        <div>
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleCompleted(todo.id)">&#1004;</span>
            <span @click="deleteTodo(todo.id)">&#10060;</span>
        </div>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>