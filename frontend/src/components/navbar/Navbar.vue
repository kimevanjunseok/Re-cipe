<template>
  <div>
    <ul id="navbar">
        <li style="float:left"><router-link class="active" to="/User"><i id="nav-icon" class="fas fa-search"></i></router-link></li>
        <li><router-link id="nav-li" to="/Main">NAMBIGATION</router-link></li>
        <li v-if="!data" style="float:right"><router-link class="active" to="/"><i id="nav-icon" class="far fa-user"></i></router-link></li>
        <li v-else style="float:right"><Logout/></li>
     </ul>
   </div>
</template>

<script>
import Logout from '../auth/Logout'

export default {
    name: "Navbar",
    components: {
        Logout,
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

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: green;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
    // float: left;
    font-family: 'Righteous', cursive;
    display: inline-block;
}

li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
</style>
