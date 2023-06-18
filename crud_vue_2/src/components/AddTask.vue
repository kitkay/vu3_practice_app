<template>
    <div class="addForm">
        <form @submit="onSubmit" class="add-form">
            <div class="form-control">
                <label>Task</label>
                <input type="text" v-model="taskValue" name="text" placeholder="Add Task"/>
            </div>
            <div class="form-control">
                <label>Day & Time</label>
                <input type="text"
                       v-model="day"
                       name="day"
                       placeholder="Add Day & Time"
                />
            </div>
            <div class="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" v-model="reminder" name="reminder"/>
            </div>

            <Button buttonValue="Save Task" color="#000" class="saveBtn"/>
        </form>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: 'AddTask',
    components: {Button},
    data() {
        return {
            taskValue: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            if (!this.taskValue && !this.day) {
                alert('Please add both Content and Day.');
                return;
            } else if (!this.day) {
                alert('Please add Day.');
                return;
            } else if (!this.taskValue) {
                alert('Please add Task.');
                return;
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                taskValue: this.taskValue,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task', newTask);

            //Clear the form
            this.taskValue = '';
            this.day = '';
            this.reminder = false;
        }
    }
}
</script>

<style scoped>
.addForm {
    text-align: justify;
    margin: 3px 30px;
    width: auto !important;
}

.addTask {
    background: green !important;
}

.addForm, label {
    font-size: 12pt;
    margin-left: 7px;
}

.add-form {
    margin-bottom: 10px;
}

.form-control {
    margin: 10px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 20px;
    margin: 3px;
    padding: 3px 5px;
    font-size: 15px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 10px;
}

.saveBtn {
    color: #fff;
    padding: 10px 15px;
    border-radius: 3px;
}
</style>