<template>
  <div>
    <!-- <Search/> -->
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
