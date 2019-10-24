<template>
    <div style="margin-top:80px;">
        <img src="../assets/main.jpg">
    </div>
</template>

<script>
export default {
    name: 'MainHomePage',
    components: {
    },
    data() {
        return {
            data: ""
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
}
</script>

<style>
img { width: 100%; height: auto; }

</style>
