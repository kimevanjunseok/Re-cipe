<template>
    <div class="div-login">
        <h2>로그인</h2>
        <form>
            <input class="input-login" type="text" v-model="userid" placeholder="ID"><br>
            <input class="input-login" type="password" v-model="password" placeholder="Password"><br>
            <input type="submit" value="로그인" class="btn-login" @click="Login()">
        </form>
        <hr class="hr-login">
        <h5 class="h5-login" @click="SignMove(false)">비회원</h5>
        <h5 class="h5-login" @click="SignMove(true)">회원가입</h5>
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
    created() {

    },
    methods: {
        Login: function() {
            this.$http.post('/api/users/login/', {userid: this.userid, password: this.password})
                .then((response) => {
                    sessionStorage.setItem('userinfo', JSON.stringify({userid: response.data.userid, ingredients: response.data.ingredients}))
                    alert('Login')
                    window.location.href = '/Main';
                })
                .catch(function (error) {
                    alert('error message: ' + error)
                })
        },
        SignMove: function(rt) {
            if (rt) {
                this.$router.push('/SignUp')
            } else {
                this.$router.push('/Main')
            }
        }
    },
}
</script>

<style lang="scss">
.div-login {
    margin-top: 80px;
    h2 {
        color: #999;
    }
}
.input-login {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.btn-login {
    width: 80%;
    background-color: #FF92B1;
    color: white;
    padding: 14px 20px;
    margin: 2%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-login:hover {
    opacity: 0.7;
}

.hr-login {
    width: 20%;
}
</style>