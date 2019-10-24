<template>

   <!-- 첫번째 헤더 -->
   <div>
     <ul class="upper">
        <li><img src="../../assets/abc.png" style="width:70px; height:70px;"></li>
        <li v-if="!data" style="float:right;"><router-link class="active" to="/User">LOGIN</router-link></li>
        <li v-else style="float:right"><Logout/></li>
     </ul>
   <!-- 두번째 헤더 -->
      <ul class="navbar">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/">레시피</router-link></li>
          <li><router-link to="/">My 레시피</router-link></li>
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

<style>
.upper {
  padding:20px 0;
  background-color:rgb(255, 125, 0) ;
}
.navbar {
  display: flex; justify-content: center;
  margin-top: 80px;
  padding:10px 0;
  z-index: 8;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0 5;
  overflow: hidden;
  background-color: rgb(233, 233, 233);
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
  text-align: center;
  display: inline-block;
}

li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  opacity: 0.5;
}
</style>
