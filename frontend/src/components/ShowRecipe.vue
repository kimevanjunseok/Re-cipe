<template>
<div>
  <h1>레시피 출력 test</h1>
  <button v-on:click="ShowRecipe">글 불러오기</button>
  <tr v-for="emp in model">
          <td v-html="emp"></td>
  </tr>
</div>


</template>

<script>
export default {
  name: 'ShowRecipe',
  data() {
    return {
      model:[]
    }
  },
  created() {

  },
  methods: {
    ShowRecipe: function() {
      // using JSONPlaceholder
      const baseURI = 'http://openapi.foodsafetykorea.go.kr/api/daf4c9d14e2c429fa76b/COOKRCP01/json/1/1000';
      console.log(baseURI);
      this.$http.get(`${baseURI}`)
        .then((result) => {
          console.log(result)
          this.model=result.data
        })
    }
  }
}
</script>
