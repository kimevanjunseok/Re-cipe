<template>
    <div style="margin-top:80px;">
        <div class="container">
            <h4>비밀번호 변경</h4>
            <hr style="width:80%;">
            <input class="input-PW" type="password" v-model="currentPW" placeholder="현재 비밀번호">
            <p class="p-error" v-show="error.currentPW">{{ error.currentPW }}</p>
            <input class="input-PW" type="password" v-model="changePW" placeholder="새로운 비밀번호">
            <p class="p-error" v-show="error.changePW">{{ error.changePW }}</p>
            <input class="input-PW" type="password" v-model="changePWconfirm" placeholder="새로운 비밀번호 확인">
            <p class="p-error" v-show="error.changePWconfirm">{{ error.changePWconfirm }}</p>
            <input type="submit" value="변경" class="btn-PW" @click="PWChange()">
        </div>
    </div>
</template>
<script>
export default {
    name: 'PWchangePage',
    data() {
        return {
            error: {
                currentPW: "",
                changePW: "",
                changePWconfirm: "",
            },
            data: "",
            realPW: "",
            currentPW_A: "",
            currentPW: "",
            changePW: "",
            changePWconfirm: "",
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
        this.$http.post('/api/users/confirm/password/', {userid: this.data.userid, password: "", boolean: true})
            .then(res => {
                this.realPW = res.data
            })
    },
    methods: {
        PWChange: async function() {
            await this.$http.post('/api/users/confirm/password/', {userid: this.data.userid, password: this.currentPW , boolean: false})
                .then(res => {
                    this.currentPW_A = res.data
                })
            if (this.currentPW_A == this.realPW) {
                if (this.changePWconfirm == this.changePW) {
                    if (this.changePWconfirm.length < 4) {
                        alert("최소 4자 이상 입력해주세요")
                    } else {
                        this.$http.post(`/api/users/update/password/`, {userid: this.data.userid, password: this.changePW})
                            .then(res => {
                                alert(res.data)
                                this.$router.push('/Profile')
                            })
                    }
                } else {
                    alert("새로운 비밀번호와 비밀번호 확인이 다릅니다!")
                }
            } else {
                alert("현재 비밀번호와 다릅니다!")
                this.error.currentPW = "현재 비밀번호와 다릅니다."
            }
        }
    },
    watch: {
        changePW: function() {
            if (this.changePW.length < 4) {
                this.error.changePW = "최소 4자 이상 입력해주세요"
            } else {
                this.error.changePW = ""
            }
        },
        changePWconfirm: function() {
            if (this.changePWconfirm == this.changePW || this.changePWconfirm.length == 0) {
                this.error.changePWconfirm = ""
            } else {
                this.error.changePWconfirm = "비밀번호가 다릅니다."
            }
        }
    }
}
</script>

<style scoped>
.container {
    padding: 2px 20px;
}
.input-PW {
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.btn-PW {
    width: 80%;
    background-color: #FF92B1;
    color: white;
    padding: 14px 20px;
    margin: 2%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.p-error {
    font-size: 70%;
    margin: 0px;
    color: red;
}
</style>