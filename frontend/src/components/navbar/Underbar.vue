<template>
<ul id="underbar">
  <li style="margin-left:3px;">
    <router-link class="active" to="/">
      <div class="f1"><img src="../../assets/chef.png" /></div>
      <div>맞춤추천</div>
    </router-link>
  </li>
  <li>
    <router-link class="active" to="/">
      <div class="f1"><img src="../../assets/chat.png" /></div>
      <div>커뮤니티</div>
    </router-link>
  </li>
  <li>
    <router-link class="active" to="/">
      <div class="f1"><img src="../../assets/text-document.png" /></div>
      <div>매거진</div>
    </router-link>
  </li>
  <li>
    <router-link class="active" to="/">
      <div class="f1"><img src="../../assets/shopping-cart.png" /></div>
      <div>쇼핑</div>
    </router-link>
  </li>
  <li>
    <router-link class="active" to="/">
      <div class="f1"><img src="../../assets/recipe.png" /></div>
      <div>마이키친</div>
    </router-link>
  </li>
</ul>
</template>

<script>
export default {
  name: "Underbar",
  components: {},
  data() {
    return {
      data: "",
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
    background-color: rgb(255, 255, 255);
    border:1px solid rgba(223, 223, 223, 0.26);
    z-index: 8;
    width: 100%;
    padding-inline-start: 0;
    margin-block-start: 00;
    margin-block-end: 0;
    text-align: center;
    list-style-type: none;
    position: fixed;
    width: 100%;
    position:fixed;
    left:0px;
    bottom:0px;
    height: auto;
}

li {
    float: left;
    display: inline-block;
    text-align: center;
    width: 70px;
}

li a {
    display: inline-block;
    color: grey;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

img {
    width: 30px;
    height: 30px;
    -webkit-filter:opacity(.5) drop-shadow(0 0 0 gray);
    filter: opacity(.5) drop-shadow(0 0 0 gray);
}
.f1 {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-bottom: 5px;
}
</style>
