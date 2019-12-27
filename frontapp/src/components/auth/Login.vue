<template>
  <div class="div-login">
    <h2>로그인</h2>
    <form>
      <input class="input-login" type="text" v-model="userid" placeholder="ID" />
      <br />
      <input class="input-login" type="password" v-model="password" placeholder="Password" />
      <br />
      <input value="로그인" class="btn-login" @click="Login()" />
    </form>
    <hr class="hr-login" />
    <h5 class="h5-login" @click="SignMove()">회원가입</h5>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userid: "",
      password: ""
    };
  },
  created() {
  },
  methods: {
      Login: function() {
        this.$http.post('http://localhost:3000/api/users/login/', {userid: this.userid, password: this.password})
          .then((response) => {
              localStorage.setItem('userinfo', JSON.stringify({userid: response.data.userid}))
              localStorage.setItem('userfood', JSON.stringify({userfood: response.data.foods}))
              alert('Login')
              this.$router.push("/main");
          })
          .catch(function (error) {
              alert('error message: ' + error)
          })
      },
      SignMove: function() {
        this.$router.push("/signup");
      },
      MainMove: function() {
        this.$router.push("/main");
      }
  },
}
</script>

<style lang="scss" scoped>
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
  width: 70%;
  background-color: #ff92b1;
  color: white;
  padding: 14px 20px;
  margin: 2%;
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.btn-login:hover {
  opacity: 0.7;
}

.hr-login {
  width: 20%;
}
</style>