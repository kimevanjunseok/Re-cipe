<template>
  <div id="app">
    <Navbar/>
      <v-content>
        <router-view></router-view>
      </v-content>
      <div v-if="!data"></div>
      <div v-else>
        <Underbar/>
      </div>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'
import Underbar from './components/navbar/Underbar'

export default {
  name: 'app',
  components: {
    Navbar,
    Underbar,
  },
  data() {
      return {
          data: "",
      }
  },
  created() {
      this.data = JSON.parse(sessionStorage.getItem('userinfo'))
  },
}
</script>

<style>

html {
min-height: 100%; margin: 0; padding: 0;  position: relative;

}
body {
margin: 0;
min-height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
