<template>
    <div id="div-loading">
        <h1 id="h1-loading">Re:cipe</h1>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            height: 0
        }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem("userinfo"))){
            this.userid = JSON.parse(localStorage.getItem("userinfo")).userid
            this.$http.post('http://localhost:3000/api/users/storage/login/', {userid: this.userid})
            .then(() => {
                sessionStorage.setItem('userinfo', JSON.stringify({userid: this.userid}))
                setTimeout(() => {
                    this.$router.push("/main");
                }, 3000)
            })
            .catch(function (error) {
                alert('error message: ' + error)
            })
        }
        else {
            setTimeout(() => {
                this.$router.push('/login');
            }, 3000)
        }
        this.height = window.innerHeight
        document.getElementById("div-loading").style.height = this.height + 'px'
        document.getElementById("h1-loading").style.height = this.height + 'px'
        document.getElementById("h1-loading").style.lineHeight  = this.height + 'px'
    },
}
</script>

<style scoped>
div {
    position: relative;
    background: url(Loading_img.jpg);
    background-size: cover;
}
h1 {
    position: absolute;
    margin: 0;
    width: 100%;
    font-size: 50px;
    color: white;
}
</style>