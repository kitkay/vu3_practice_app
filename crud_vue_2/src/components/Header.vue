<template>
  <header>
      <h1>{{title}}</h1>
      <Button buttonValue="Add Task" color="yellow"/>
<!--      <Button buttonValue="Update Task" color="green"/>-->
<!--      <Button buttonValue="Delete Task" color="red"/>-->
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
        }
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
</style>