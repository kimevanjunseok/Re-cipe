<template>
    <p @click="Logout()">로그아웃</p>
</template>

<script>
export default {
    name: 'Logout',
    data() {
        return {
        }
    },

    methods: {
        Logout: function() {
            var userId = JSON.parse(localStorage.getItem("userinfo"));
            var userFood = JSON.parse(localStorage.getItem("userfood")).userfood

            this.$http.post('http://localhost:3000/api/users/storage/food/', {userid: userId, userfood: userFood})
            .then((response) => {
                console.log(response)
                setTimeout(() => {
                    this.$router.push('/');
                }, 500)
                localStorage.clear();
            })
            .catch(function (error) {
                alert('error message: ' + error)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
</style>