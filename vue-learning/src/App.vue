<template>
  <div>
    welcome to spa
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './myHeader.vue'
  import MyFooter from './myFooter.vue'

export default {
  data(){return {}},
  methods : {},
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
