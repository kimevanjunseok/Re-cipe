<template>
    <div>
        <input type="text" v-model="userid" placeholder="ID">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="Login()">확인</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            userid: "",
            password: "",
        }
    },
    methods: {
        Login: function() {
            this.$http.post('/api/users/login/', {userid: this.userid, password: this.password})
                .then((response) => {
                    sessionStorage.setItem('userinfo', JSON.stringify({userid: response.data.userid, ingredients: response.data.ingredients}))
                    alert('Success')
                    this.$router.push('/');
                })
                .catch(function (error) {
                    alert('error message: ' + error)
                })
        }
    },
}
</script>