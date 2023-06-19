<template>
  <button @click="onClick()" :style="{background: color}" class="btn">
      {{ buttonValue }}
  </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        buttonValue: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('toggle-add-task');
        }
    }
}
</script>

<style scoped>
.btn {
    padding: 3px 10px;
    border-radius: 10px;
    border-color: orange;
}
</style>