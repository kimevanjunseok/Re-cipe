<template>
  <div class="recipe-menu">
    <div class="recipe-all">
      <div v-if="recipes.length > 0">
        <div
          v-for="recipe in recipes"
          :key="recipe._id"
          style="position:relative; margin-bottom:2px;"
          @click="getDetail(recipe)"
        >
          <img :src="recipe.picture" style="vertical-align: middle;" />
          <div class="text">
            <h3 style="margin-bottom:5px;">{{ recipe.summary }}</h3>
            <h1>{{ recipe.name }}</h1>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 style="margin-top:120px">{{ text }}</h1>
      </div>
    </div>
    <router-link to="/recipe/create"
      ><img
        src="../assets/상세창/contract.png"
        style="width:15%; z-index:199; position: fixed; bottom: 15px; right: 15px;
      border: 2px solid rgb(255, 173, 0); border-radius: 50px;"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: "recipeShowAllPage",
  data() {
    return {
      recipes: [],
      historydata: "",
      text: ""
    };
  },
  methods: {
    getDetail(item) {
      console.log(item);
      this.$router.push("/recipe/" + item._id);
    },
    isEmpty: function(ob) {
      for (let i in ob) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    this.historydata = this.$route.params.recipe_select;
    this.$http
      .get("http://localhost:3000/api/recipe/select", {
        params: { select: this.historydata }
      })
      .then(res => {
        this.recipes = res.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scopped>
@import url("https://fonts.googleapis.com/css?family=Jua&display=swap");
html {
  overflow: scroll;
}
.recipe-menu {
  .recipe-all {
    margin-bottom: 81px;
    .text {
      background-color: rgba(242, 159, 175, 0.76);
      vertical-align: center;
      text-align: left;
      position: absolute;
      top: 85%;
      left: 50%;
      width: 350px;
      height: 90px;
      padding-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      transform: translate(-50%, -50%);
      color: white;
    }
    h1 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h3 {
      display: block;
      font-size: 1em;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    img {
      width: 100%;
    }

    #btn {
      width: 15%;
    }
  }
}
</style>
