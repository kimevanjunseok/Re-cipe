<template>
    <p @click="Delete()">회원탈퇴</p>
</template>

<script>
export default {
    name: 'Delete',
    data() {
        return {
            data: ""
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
    methods: {
        Delete: function() {
            var yes_or_no = confirm("탈퇴하시겠습니까?")
            if (yes_or_no) {
                this.$http.delete(`/api/users/delete/${this.data.userid}/`)
                sessionStorage.removeItem("userinfo");
                window.location.href = '/';
            }
        }
    }
}
</script>