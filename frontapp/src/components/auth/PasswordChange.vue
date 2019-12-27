<template>
    <p @click="PWChange()">비밀변호 변경</p>
</template>
<script>
export default {
    name: 'PasswordChange',
    data() {
        return {
        }
    },
    methods: {
        PWChange: function() {
            this.$router.push('/PasswordChange')
        }
    },
}
</script>