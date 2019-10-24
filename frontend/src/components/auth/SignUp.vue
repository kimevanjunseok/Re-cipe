<template>
    <div class="div-signup">
        <h2>가입하기</h2>
    
        <input class="input-signup" type="text" v-model="userid" placeholder="ID"><br>
        <p class="p-id" v-show="error.id">{{ error.id }}</p>
        <input class="input-signup" type="password" v-model="password" placeholder="Password"><br>
        <p class="p-password" v-show="error.password">{{ error.password }}</p>
        <input class="input-signup" type="text" v-on:keyup.enter="Ingredient_save()" id="ingredient" v-model="ingredient" placeholder="재료"><br>
        <p class="p-ingredient" v-show="error.ingredient">{{ error.ingredient }}</p>
        <div class="md-chips" id="md-chips"></div>
        <button class="btn-signup" @click="SignUp()">가입</button>
        <hr class="hr-signup">
        <h5 class="h5-signup" @click="LoginMove()">로그인</h5>

    </div>

</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            error: {
                id: "",
                password: "",
                ingredient: "",
            },
            userid: "",
            password: "",
            ingredient: "",
            ingredients: [],
        }
    },
    mounted() {
        document.getElementById('md-chips').onclick = (res) => {
            if (res.path[0].id) {
                this.Ingredient_delete(res.path[0].id)
            }
        };
    },
    watch: {
        userid: function () {
            if (this.userid.length === 0) {
                this.error.id = "ID를 입력해주세요"
            } else if (this.userid.length < 4) {
                this.error.id = "최소 4자 이상 입력해주세요"
            } else {
                this.error.id = ""
            }
        },
        password: function () {
            if (this.password.length === 0) {
                this.error.password = "Password를 입력해주세요"
            } else if (this.password.length < 4) {
                this.error.password = "최소 4자 이상 입력해주세요"
            } else {
                this.error.password = ""
            }
        }
    },
    methods: {
        SignUp: function() {
            if (this.userid.length === 0) {
                alert("ID를 입력해주세요!")
                this.error.id = "ID를 입력해주세요"
            } else if (this.userid.length < 4) {
                alert("최소 4자 이상 입력해주세요!")
            } else if (this.password.length === 0) {
                alert("Password를 입력해주세요")
                this.error.password = "Password를 입력해주세요"
            } else if (this.password.length < 4) {
                alert("최소 4자 이상 입력해주세요")
            } else {
                this.$http.post('/api/users/create/', {userid: this.userid, password: this.password, ingredients: this.ingredients})
                    .then((response) => {
                        if (response.data) {
                            alert('Success')
                            sessionStorage.setItem('userinfo', JSON.stringify({userid: response.data.userid, ingredients: response.data.ingredients}))
                            window.location.href = '/Main';
                        } else {
                            alert('이미 사용중인 ID입니다.')
                        }
                    })
                    .catch(function (error) {
                        alert('error message: ' + error)
                    })
            }
        },
        Ingredient_save: function() {
            if (this.ingredient.split(' ') == this.ingredient) {
                if (this.ingredients.length > 9) {
                    this.error.ingredient = "10개 이하로 입력해주세요!"
                } else {
                    if (this.ingredients.includes(this.ingredient)) {
                        this.error.ingredient = "이미 넣은 재료입니다"
                    } else {
                        $('.md-chips').append(`<div class="md-chip" id="${this.ingredient}">
                                                <span>${this.ingredient}</span>
                                                <button type="button" id="${this.ingredient}" class="md-chip-remove">
                                                </button>
                                            </div>`)
                        this.ingredients.push(this.ingredient)
                        this.error.ingredient = ""
                    }
                }
                this.ingredient = ""
            }
        },
        Ingredient_delete(ingredient_data) {
            var cnt = 0
            this.ingredients.some(element => {
                if (element === ingredient_data){
                    return true
                } else {
                    cnt += 1
                }
            });
            this.ingredients.splice(cnt, 1)
            $('.md-chip').remove('#' + `${ingredient_data}`)
        },
        LoginMove: function() {
            this.$router.push('/')
        }
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

$md-chip-height: 32px;
$md-chip-color: #e0e0e0;

.md-chip {
  display: inline-block;
  background: $md-chip-color;
  padding: 0 12px;
  border-radius: 32px;
  font-size: 13px;
  &.md-chip-hover:hover {
    background: #ccc;
  }
}

.md-chip-remove {
  display: inline-block;
  background: #aaa;
  border: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 0;
  margin: 0 -4px 0 4px;
  cursor: pointer;
  font: inherit;
  line-height: 20px;
  &:after { 
    color: $md-chip-color;
    content: 'x';
  }
  &:hover {
    background: #999;
  }
  &:active {
    background: #777;
  }
}

.md-chips {
  padding: 12px 0;
  .md-chip {
    margin: 0 5px 3px 0;
  } 
}

.div-signup {
    margin-top: 80px;
    h2 {
        color:#999;
    }
    .p-id, .p-password, .p-ingredient {
        font-size: 70%;
        margin: 0px;
        color: red;
    }
}
.input-signup {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.btn-signup {
    width: 80%;
    background-color: #FF92B1;
    color: white;
    padding: 14px 20px;
    margin: 2%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-signup:hover {
    opacity: 0.7;
}

.hr-signup {
    width: 20%;
}
</style>