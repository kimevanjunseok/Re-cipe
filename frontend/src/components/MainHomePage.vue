<template>
    <Search/>
</template>

<script>
import Search from './search/Search'

export default {
    name: 'MainHomePage',
    components: {
        Search,
    },
    data() {
        return {
            data: "",
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
}
</script>