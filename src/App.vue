<template>
  <div id="app">

    <div id="app" class="animate__animated animate__fadeIn ">
   <app-navbar></app-navbar>
  <router-view></router-view>

</div>
  </div>
</template>
<script>
import navbar from './components/navigation/nav'
export default {
 components:{
 'app-navbar':navbar
  },
 
  data() {
    return {
   navbar
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
