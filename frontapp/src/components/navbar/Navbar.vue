<template>
  <ul id="navbar">
    <li style="float:left" v-if="['MainHomePage', 'RecipeShowAll'].includes($route.name)">
      <router-link class="active" to="/menu">
        <i id="nav-icon1" class="fas fa-search"></i>
      </router-link>
      <input v-show="urldata=='Menu'" type="search"/>
    </li>
    <li style="float:left" v-else>
      <router-link class="active" to="/menu">
        <i id="nav-icon1" class="fas fa-utensils"></i>
      </router-link>
      <input v-show="urldata=='Menu'" type="search" />
    </li>
    <li v-show="urldata!='Menu'">
      <router-link id="nav-li" to="/main" style="margin-left: 36px;">RE:CIPE</router-link>
    </li>
    <li v-show="urldata!='Menu'" style="float:right">
      <router-link class="active" to="/profile">
        <i id="nav-icon2" class="far fa-user"></i>
      </router-link>
    </li>
    <li v-show="urldata!='Menu'" style="float:right;">
      <span><i class="fas fa-mobile-alt" @click="installer()" :style="{'display': installBtn}"></i></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      data: "",
      urldata: "",
      installBtn: "none",
      installer: undefined
    };
  },
  mounted() {
    let installPrompt;
    window.addEventListener("beforeinstallprompt", e => {
      console.log(e)
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "";
    });
    this.installer = () => {
      this.installBtn = "none";
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
        console.log("Install accepted!")
        } else {
        console.log("Install denied!")
        }
      });
    };
  },
  created() {
    this.data = JSON.parse(sessionStorage.getItem("userinfo"));
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 10) {
        document.getElementById("navbar").style.backgroundColor = "#F57694";
        document.getElementById("nav-li").style.color = "#FFFFFF";
        document.getElementById("nav-icon1").style.color = "#FFFFFF";
        document.getElementById("nav-icon2").style.color = "#FFFFFF";
      } else {
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("nav-li").style.color = "#999";
        document.getElementById("nav-icon1").style.color = "#999";
        document.getElementById("nav-icon2").style.color = "#999";
      }
    }
  },
  watch: {
    $route: function(route) {
      this.urldata = route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.Logo {
  color: red;
}
ul {
  z-index: 8;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(0, 128, 0, 0);
  position: fixed;
  top: 0;
  width: 100%;
  transition: background-color 1s ease-out;
  #nav-li {
    color: #999;
  }
  #nav-icon {
    color: #999;
  }
  #nav-icon1 {
    color: #999;
  }
  #nav-icon2 {
    color: #999;
  }
}

li {
  // float: left;
  font-family: "Righteous", cursive;
  display: inline-block;
}

li a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 15px 13px;
  text-decoration: none;
}

li span {
  display: inline-block;
  color: rgb(167, 167, 167);
  text-align: center;
  padding: 15px 13px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  opacity: 1;
  input {
    outline: none;
  }
}

input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type="search"] {
  border: solid 1px #ccc;
  padding: 9px 12px 9px 12px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type="search"]:focus {
  width: 130px;
  background-color: #fff;
  border-color: #f29eae;

  -webkit-box-shadow: 0 0 5px #f5c9ca;
  -moz-box-shadow: 0 0 5px #f5c9ca;
  box-shadow: 0 0 5px #f5c9ca;
}
</style>