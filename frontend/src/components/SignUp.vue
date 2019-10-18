<template>
    <div>
        <input type="text" v-model="userid" placeholder="ID">
        <input type="password" v-model="password" placeholder="Password">
        <input type="text" v-model="ingredient" placeholder="재료">
        <button @click="SignUp()">확인</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            userid: "",
            password: "",
            ingredient: "",
            ingredients: [],
        }
    },
    methods: {
        SignUp: function() {
            this.ingredients = this.ingredient.split(' ')
            this.$http.post('/api/users/create/', {userid: this.userid, password: this.password, ingredients: this.ingredients})
    }
  },
}
</script>