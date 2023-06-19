<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            @toggle-add-task="$emit('toggle-add-task')"
            :buttonValue="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'"
        />
    </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: 'Default Title'
        },
        showAddTask: Boolean
    },
    components: {
        Button
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

button {
    color: #fff;
    padding: 10px 15px !important;
    border-radius: 5px !important;
}
</style>