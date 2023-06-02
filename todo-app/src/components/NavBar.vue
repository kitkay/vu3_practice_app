<template>
    <nav>
        <ul>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
ul {
    list-style: none;
}

li {
    display: flex;
    flex-direction: row;
}
</style>