<template>
<v-content>
    <Search/>
    <Ref/>
</v-content>
</template>

<script>
import Search from './search/Search'
import Ref from './Ref'

export default {
    name: 'MainHomePage',
    components: {
        Search,
        Ref,
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