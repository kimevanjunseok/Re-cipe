<template>
    <div class="div-signup">
        <h1>회원가입</h1>
        <input class="input-signup" type="text" v-model="userid" placeholder="ID"><br>
        <input class="input-signup" type="password" v-model="password" placeholder="Password"><br>
        <input class="input-signup" type="text" id="ingredient" v-model="ingredient" placeholder="재료"><br>
        <button class="btn-signup" @click="SignUp()">가입</button>
        <router-link class="btn-signup" to="/User" tag="button">로그인</router-link>
    </div>

</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            userid: "",
            password: "",
            ingredient: "",
            ingredients: [],
        }
    },
    methods: {
        SignUp: function() {
            this.ingredients = this.ingredient.split(' ')
            this.$http.post('/api/users/create/', {userid: this.userid, password: this.password, ingredients: this.ingredients})
                .then((response) => {
                    if (response.data) {
                        alert('Success')
                        window.location.href = '/';
                    } else {
                        alert('이미 사용중인 ID입니다.')
                    }
                })
                .catch(function (error) {
                    alert('error message: ' + error)
                })
    }
  },
}
</script>

<style>
.div-signup {
    margin-top: 80px;
}
.input-signup {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.btn-signup {
    width: 19.5%;
    background-color: green;
    color: white;
    padding: 14px 20px;
    margin: 8px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-signup:hover {
    opacity: 0.7;
}
</style>