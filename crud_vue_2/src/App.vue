<template>
    <span>
        <Header title="Task Tracker"/>
        <AddTasks @add-task="addTask"/>
    </span>

    <Tasks :tasks="tasks"
           @toggle-reminder="toggleReminder"
           @update-task="updateTask"
           @delete-task="deleteTask"
    />
</template>

<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import AddTasks from "@/components/AddTask.vue";

export default {
    name: 'App',
    components: {
        Header,
        Tasks,
        AddTasks
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        addTask(task) {
            this.tasks = [...this.tasks, task];
        },
        updateTask(id) {
            if (confirm('Edit entry.')) {
                console.log('Edit entry', id);
            }
        },
        deleteTask(id) {
            if (confirm('Are you sure?')) {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            }
        },
        toggleReminder(id) {
            //map allows us to manipulate array
            //This here could allow us to toggle row
            this.tasks = this.tasks.map(
                (task) => task.id === id ? {...task, reminder: !task.reminder} : task
            );
        }
    },
    created() {
        this.tasks = [
            {
                id: 1,
                taskValue: 'My 1st taskValue',
                day: 'Today is made',
                reminder: true
            },
            {
                id: 2,
                taskValue: 'My 2nd taskValue',
                day: 'Yesterday it was planned',
                reminder: true
            },
            {
                id: 3,
                taskValue: 'My 3rd taskValue',
                day: 'Today and yesterday was a time',
                reminder: false
            },
        ];
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border: 1px solid #000;
    margin: 15px;
    padding: 20px;
    display: flex;
}

#app>span {
    width: 50%;
}

</style>
