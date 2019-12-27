<template>
  <div style="margin-top:50px;">
    <div class="container">
      <h3 style="margin-bottom:0px;">Country</h3>
      <hr />
      <div class="card-grid">
        <div class="card" @click="totalpage('한식')">한식</div>
        <div class="card" @click="totalpage('중국')">중식</div>
        <div class="card" @click="totalpage('일본')">일식</div>
        <div class="card" @click="totalpage('이탈리아')">이탈리아식</div>
        <div class="card" @click="totalpage('서양')">서양식</div>
        <div class="card" @click="totalpage('퓨전')">퓨전</div>
      </div>
    </div>
    <div class="container">
      <h3 style="margin-bottom:0px;">Category</h3>
      <hr />
      <div class="card-grid">
        <div
          class="card"
          v-for="(category, index) in categories"
          :key="index"
          @click="totalpage(category)"
        >
          {{ category }}
        </div>
      </div>
    </div>
    <div class="container">
      <h3 style="margin-bottom:0px;">Level</h3>
      <hr />
      <div class="card-grid" style="margin-bottom:25px;">
        <div
          class="card"
          v-for="(level, index) in levels"
          :key="index"
          @click="totalpage(level)"
        >
          {{ level }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      categories: [],
      levels: ["초보환영", "보통", "어려움"]
    };
  },
  mounted() {
    this.$http.get("http://localhost:3000/api/recipe/category").then(result => {
      this.categories = result.data.sort();
    });
  },
  methods: {
    totalpage: function(data) {
      function replaceAll(str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
      }
      if (data.includes("/")) {
        let redata = replaceAll(data, "/", "-");
        this.$router.push("/menu/" + redata);
      } else {
        this.$router.push("/menu/" + data);
      }
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  height: 30px;
  margin: 7px;
}

.container {
  padding: 2px 20px;
  margin-bottom: 15px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
