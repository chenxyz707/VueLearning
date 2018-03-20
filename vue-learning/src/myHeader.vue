<template>
    <div>
        我是head
        <router-link :to="{name: 'index'}"></router-link>
        <router-link :to="{name: 'music'}"></router-link>
    </div>
</template>
<script>
    export default{
        data(){return {}},
        methods : {}
    }
</script>
<style scoped>
    div {
        background-color: pink;
        height: 100px;
    }
</style>