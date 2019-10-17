<template>
    <div>
        <input type="text" v-model="userid">{{userid}}
        <input type="password" v-model="password">{{password}}
        <input type="text" v-model="ingredient">
        <button @click="save()">확인</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userid: "",
            password: "",
            ingredient: "",
            ingredients: [],
        }
    },
    methods: {
    save: function() {
      this.$http.post('/api/users/create/', {userid: this.userid, password: this.password, ingredients: this.ingredients})
    }
  },
}
</script>