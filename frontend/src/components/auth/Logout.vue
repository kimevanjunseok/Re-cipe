<template>
    <i id="nav-icon" style="padding: 14px 16px;" @click="Logout()" class="fas fa-sign-out-alt"></i>
</template>

<script>
export default {
    name: 'Logout',
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
    }
}
</script>

<style lang="scss">
</style>