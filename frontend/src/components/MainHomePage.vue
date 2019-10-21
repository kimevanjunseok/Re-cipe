<template>
    <div>
        <div v-if="data">
            <h1 >Login 하셨습니다.</h1>
            <button @click="Logout()">로그아웃</button>
        </div>
        <div v-else>
            <h1 >메롱</h1>
            <button @click="Move">로그인</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'MainHomePage',
    data() {
        return {
            data: ""
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
    methods: {
        Logout: function() {
            sessionStorage.removeItem("userinfo");
            window.location.href = '/';
        },
        Move: function() {
            this.$router.push('/Login');
        }
    }
}
</script>