<template>
  <div>
    <Search class="search-class" id="Search-tag"/>
  </div>
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
            height: 0,
            width: 0,
        }
    },
    created() {
    },
    mounted() {
        this.height = window.innerHeight
        this.width = window.innerWidth
        document.getElementById("Search-tag").style.height = this.height + 'px'
        document.getElementById("Search-tag").style.width = this.width + 'px'
        document.getElementById("Search-tag").style.backgroundSize  = this.width + 'px' + " "  + this.height + 'px'
        document.getElementById("Search-tag").style.backgroundSize  = this.width + 'px' + " "  + this.height + 'px'
    },
}
</script>

<style scoped>
.search-class {
    position: absolute;  
}
</style>
