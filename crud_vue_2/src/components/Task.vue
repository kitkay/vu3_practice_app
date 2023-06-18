<template>
    <div @dblclick="$emit('toggle-reminder', task.id)"
         :class="[task.reminder ? 'reminder' : '', 'task']">
        <span>
            {{ task.id }} -
            {{ task.taskValue }}
            <i @click="$emit('delete-task', task.id)"
               class="fas fa-times">
            </i>
            <i @click="$emit('update-task', task.id)"
                class="fas fa-pencil">
            </i>
        </span>
        <span>
            {{ task.day }}
        </span>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: Object
    },
    methods: {}
}
</script>

<style scoped>
.fa-times {
    color: red;
    margin: 3px;
}

.fa-pencil {
    color: green;
}

.task {
    background: #f4f4f4;
    margin-bottom: 1px;
    padding: 1px 3px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}

div {
    margin: 3px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    text-align: right;
}
</style>