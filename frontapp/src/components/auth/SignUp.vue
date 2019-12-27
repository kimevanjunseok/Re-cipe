<template>
    <div class="div-signup">
        <h2>Sign Up</h2>
        <input class="input-signup" type="text" v-model="userid" placeholder="ID를 입력해주세요."><br>
        <p class="p-id" v-show="error.id" style="font-size: 11px;"><b>{{ error.id }}</b></p>
        <input class="input-signup" type="password" v-model="password" placeholder="Password를 입력해주세요."><br>
        <p class="p-password" v-show="error.password" style="font-size: 11px;"><b>{{ error.password }}</b></p>
        <div class="select">
            <select multiple="multiple" v-model="foods">
                <option value="" disabled><b>냉장고 속 재료를 골라주세요.</b></option>
                <option v-for="component in components" :key="component">{{ component }}</option>
            </select>
            <div class="select__arrow"></div>
        </div>
        <br/>
        <button class="btn-signup" @click="SignUp()">회원가입</button>
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
            },
            userid: "",
            password: "",
            foods: [],
            components: [
            "가지",
            "감자",
            "고등어",
            "고사리",
            "깍두기",
            "깻잎",
            "다시마",
            "두부",
            "마늘",
            "무말랭이",
            "무우",
            "미나리",
            "미역",
            "배추",
            "부추",
            "새우",
            "새우젖",
            "생강",
            "소주",
            "시금치",
            "양배추",
            "양상추",
            "양파",
            "오이소박이",
            "오징어",
            "콩나물",
            "파",
            "파전",
            "간장",
            "갈치",
            "게",
            "게맛살",
            "게살",
            "계란",
            "계피",
            "고구마",
            "고추",
            "고추장",
            "고춧가루",
            "골뱅이",
            "광어",
            "굴",
            "김치",
            "꽁치",
            "꽃게",
            "꿀",
            "낙지",
            "느타리버섯",
            "단무지",
            "닭가슴살",
            "대구",
            "돼지고기",
            "딸기",
            "라면",
            "라이스페이퍼",
            "라임",
            "레몬",
            "머스타드",
            "문어",
            "바질",
            "밥",
            "버섯",
            "버터",
            "베이컨",
            "브로콜리",
            "사과",
            "소고기",
            "소시지",
            "송어",
            "순대",
            "스위트콘",
            "스파게티면",
            "쌀",
            "아보카도",
            "양송이",
            "연어",
            "오렌지",
            "오이",
            "옥수수",
            "와사비",
            "완두콩",
            "우동면",
            "전복",
            "조개",
            "쭈꾸미",
            "참치",
            "체리",
            "치즈",
            "케첩",
            "콩",
            "키위",
            "파스타",
            "파슬리",
            "파인애플",
            "파프리카",
            "포도",
            "피클",
            "해삼",
            "햄",
            "홍합",
            ],
        }
    },
    watch: {
        userid: function () {
            if (this.userid.length < 4) {
                this.error.id = "최소 4자 이상 입력해주세요"
            } else {
                this.error.id = ""
            }
        },
        password: function () {
            if (this.password.length < 4) {
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
                this.$http.post('http://localhost:3000/api/users/create/', {userid: this.userid, password: this.password, foods:this.foods})
                    .then((response) => {
                        if (response.data) {
                            alert('Success')
                            localStorage.setItem('userinfo', JSON.stringify({userid: response.data.userid}))
                            localStorage.setItem('userfood', JSON.stringify({userfood: this.foods}))
                            window.location.href = '/Main';
                        } else {
                            alert('이미 사용중인 ID입니다.')
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                        alert('이미 사용중인 ID입니다. 다른 ID를 사용해주세요.')
                    })
            }
        },
        LoginMove: function() {
            this.$router.push('/Login')
        }
  },
}
</script>

<style lang="scss">
    .div-signup {
        margin-top: 80px;
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
        background-color: #369aef;
        color: white;
        padding: 10px 20px;
        margin: 20px 8px;
        border: none;
        border-radius: 4px;
        font-size: 15px;
        cursor: pointer;
    }
    .btn-signup:hover {
        opacity: 0.7;
    }
    .select {
        position: relative;
        display: inline-block;
        margin-top: 15px;
        width: 86%;
    }
    .select select {
        display: inline-block;
        width: 93%;
        cursor: pointer;
        padding: 12px 20px;
        outline: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #ffffff;
        color: #636262;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        margin-top: -6px;
        font-size: 13px;
    }
    .select select::-ms-expand {
        display: none;
    }
    .select select:hover,
    .select select:focus {
        color: #000;
        background: #eee;
    }
    .select select:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    .select__arrow {
        position: absolute;
        top: 10px;
        right: 25px;
        width: 0;
        height: 0;
        pointer-events: none;
        border-style: solid;
        border-width: 8px 5px 0 5px;
        border-color: #7b7b7b transparent transparent transparent;
    }
    .select select:hover ~ .select__arrow,
    .select select:focus ~ .select__arrow {
        border-top-color: #000;
    }
    .select select:disabled ~ .select__arrow {
        border-top-color: #ccc;
    }
    .select select option {
        margin-bottom: 10px;
    }
</style>