<template>
    <div>
        <button @click="Logout()">로그아웃</button>
    </div>
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