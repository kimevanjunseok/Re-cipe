<template>
    <ul id="navbar">
        <!-- <li><router-link class="active" to="/User"><i id="nav-icon" class="fas fa-search"></i></router-link></li> -->
        <li><router-link id="nav-li" to="/">NAMBIGATION</router-link></li>
        <li v-if="!data" style="float:right"><router-link class="active" to="/User"><i id="nav-icon" class="far fa-user"></i></router-link></li>
        <li v-else style="float:right"><Logout/></li>
    </ul>
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
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll () {
            if (window.pageYOffset > 80) {
                document.getElementById('navbar').style.backgroundColor = "#FF92B1";
                document.getElementById('nav-li').style.color = "#FFFFFF";
                document.getElementById('nav-icon').style.color = "#FFFFFF";
            } else {
                document.getElementById('navbar').style.backgroundColor = "#FFFFFF";
                document.getElementById('nav-li').style.color = "#999";
                document.getElementById('nav-icon').style.color = "#999";
            }
        }

    },
}
</script>

<style lang="scss">
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
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
}

li {
    float: left;  
    font-family: 'Righteous', cursive;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
</style>