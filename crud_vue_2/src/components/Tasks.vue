<template>
    <div v-for="task in tasks" :key="task.id">
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)"
              @update-task="$emit('update-task', task.id)"
              @delete-task="$emit('delete-task', task.id)"
              :task="task"
        />
    </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
    name: "Tasks",
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    emits: ['update-task', 'delete-task', 'toggle-reminder']
}
</script>

<style scoped>

</style>