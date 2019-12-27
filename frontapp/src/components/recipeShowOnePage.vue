<template>
  <div class="recipe-one">
    <!-- Admin 등록 레시피 정보 -->
    <h2 v-if="itemIndex === true">{{ MyItems.name }}</h2>
    <img
      v-if="itemIndex === true"
      :src="MyItems.picture"
      style="width:90%; float:center; margin-bottom:10px;"
    />

    <!-- User 등록 레시피 정보 -->
    <h2 v-if="itemIndex === false">{{ UserItems.name }}</h2>
    <img
      :src="UserItems.picture"
      v-if="itemIndex === false"
      style="width:90%; float:center; margin-bottom:10px;"
    />

    <!-- Admin 등록 재료 정보 -->
    <div v-if="itemIndex === true" class="table">
      <img src="../assets/상세창/ingredients.png" />
      <h3>&nbsp;&nbsp;재료 정보</h3>
      <hr style="width:100%;" />
      <h4>{{ MyItems.qnt }} 기준</h4>

      <button id="test_btn1">주재료</button>
      <br />
      <div
        v-for="(value, index) in MyItems.ingredients[0].주재료"
        :key="index"
        style="display:inline;"
      >
        <div
          v-for="(item, index2) in value"
          :key="item"
          style="display:inline;"
        >
          {{ index2 }}&nbsp;{{ item }}
          <div
            v-if="index != MyItems.ingredients[0].주재료.length - 1"
            style="display:inline;"
          >
            /
          </div>
        </div>
      </div>

      <br />
      <br />
      <button id="test_btn2">부재료</button>
      <br />
      <div
        v-for="(value, index) in MyItems.ingredients[0].부재료"
        :key="index"
        style="display:inline;"
      >
        <div
          v-for="(item, index2) in value"
          :key="item"
          style="display:inline;"
        >
          {{ index2 }}&nbsp;{{ item }}
          <div
            v-if="index != MyItems.ingredients[0].부재료.length - 1"
            style="display:inline;"
          >
            /
          </div>
        </div>
      </div>

      <br />
      <br />
      <button id="test_btn3">&nbsp;양념&nbsp;</button>
      <br />
      <div
        v-for="(value, index) in MyItems.ingredients[0].양념"
        :key="index"
        style="display:inline;"
      >
        <div
          v-for="(item, index2) in value"
          :key="item"
          style="display:inline;"
        >
          {{ index2 }}&nbsp;{{ item }}
          <div
            v-if="index != MyItems.ingredients[0].양념.length - 1"
            style="display:inline;"
          >
            /
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr style="width:100%;" />
      <p>*재료 계측량은 개인 취향에 따라 차이가 있을 수 있습니다.</p>
    </div>

    <!-- User등록 재료 정보 -->
    <div v-if="itemIndex === false" class="table">
      <img src="../assets/상세창/ingredients.png" />
      <h3>&nbsp;&nbsp;재료 정보</h3>
      <hr style="width:100%;" />
      <h4>{{ UserItems.qnt }} 기준</h4>

      <button id="test_btn1">주재료</button>
      <br />
      <div
        v-for="(value, index) in UserItems.userIngredients"
        :key="index"
        style="display:inline;"
      >
        {{ value }}
        <div
          v-if="index != UserItems.userIngredients - 1"
          style="display:inline;"
        >
          /
        </div>
      </div>

      <br />
      <br />
    </div>

    <!-- Admin 레시피 정보 -->
    <div v-if="itemIndex === true" class="table2">
      <img
        src="../assets/상세창/recipe.png"
        style="float: left; padding: 10px 0;"
      />
      <h3>&nbsp;&nbsp;레시피 정보</h3>
      <hr style="width:100%;" />

      <div v-if="MyItems.nation == '한식'" style="display:inline;">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/south-korea.png" />
      </div>

      <div v-else-if="MyItems.nation == '중국'">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/china.png" />
      </div>

      <div v-else-if="MyItems.nation == '이탈리아'">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/italy.png" />
      </div>

      <div v-else-if="MyItems.nation == '일본'">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/japan.png" />
      </div>

      <div v-else-if="MyItems.nation == '서양'">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/united-states.png" />
      </div>

      <div v-else-if="MyItems.nation == '퓨전'" style="display:inline;">
        <p>국가&nbsp;:&nbsp;{{ MyItems.nation }}</p>
        <img src="../assets/상세창/internet.png" style="width:8%;" />
      </div>

      <h4>칼로리: {{ MyItems.cal }}</h4>
      <h4>난이도: {{ MyItems.level }}</h4>
    </div>

    <!-- User 레시피 정보 -->
    <div v-if="itemIndex === false" class="table2">
      <img
        src="../assets/상세창/recipe.png"
        style="float: left; padding: 10px 0;"
      />
      <h3>&nbsp;&nbsp;레시피 정보</h3>
      <hr style="width:100%;" />

      <div v-if="UserItems.nation == '한식'" style="display:inline;">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/south-korea.png" />
      </div>

      <div v-else-if="UserItems.nation == '중국'">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/china.png" />
      </div>

      <div v-else-if="UserItems.nation == '이탈리아'">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/italy.png" />
      </div>

      <div v-else-if="UserItems.nation == '일본'">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/japan.png" />
      </div>

      <div v-else-if="UserItems.nation == '서양'">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/united-states.png" />
      </div>

      <div v-else-if="UserItems.nation == '퓨전'" style="display:inline;">
        <p>국가&nbsp;:&nbsp;{{ UserItems.nation }}</p>
        <img src="../assets/상세창/internet.png" style="width:8%;" />
      </div>

      <h4>칼로리: {{ UserItems.cal }}</h4>
      <h4>난이도: {{ UserItems.level }}</h4>
    </div>

    <!-- Admin 레시피 과정 정보 -->
    <div v-if="itemIndex === true" class="table3">
      <img
        src="../assets/상세창/fried.png"
        style="width: 13%; float: left; padding: 10px 0;"
      />
      <h3>&nbsp;&nbsp;레시피 과정</h3>
      <hr style="width:100%;" />

      <div
        v-for="(value, index) in MyItems.info"
        :key="value"
        style="display:inline;"
      >
        <h2>STEP {{ index + 1 }}</h2>
        <div style="display:inline;">
          <img v-if="value.picture" :src="value.picture" />
          <p>{{ value.content }}</p>
        </div>
      </div>
    </div>

    <!-- User 레시피 과정 정보 -->
    <div v-if="itemIndex === false" class="table3">
      <img
        src="../assets/상세창/fried.png"
        style="width: 13%; float: left; padding: 10px 0;"
      />
      <h3>&nbsp;&nbsp;레시피 과정</h3>
      <hr style="width:100%;" />
      <div
        v-for="(value, index) in UserItems.userInfos"
        :key="value"
        style="display:inline;"
      >
        <h2>STEP {{ index + 1 }}</h2>
        <div style="display:inline;">
          <img v-if="value.picture" :src="value.picture" />
          <p>{{ value.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recipeShowOnePage",
  data() {
    return {
      itemIndex: true,
      MyItems: {
        ingredients: [
          {
            주재료: [],
            부재료: [],
            양념: []
          }
        ],
        info: [
          {
            content: "",
            picture: ""
          }
        ],
        _id: "",
        name: "",
        summary: "",
        nation: "",
        qnt: "",
        cal: "",
        level: "",
        picture: "",
        category: ""
      },
      UserItems: {
        userIngredients: [],
        UserInfos: [
          {
            content: "",
            picture: ""
          }
        ],
        _id: "",
        name: "",
        summary: "",
        nation: "",
        qnt: "",
        cal: "",
        level: "",
        picture: "",
        category: ""
      }
    };
  },
  methods: {},
  created() {
    axios
      .get(
        "http://localhost:3000/api/recipe/detail/" +
          this.$route.params.recipe_id
      )
      .then(response => {
        console.log(response.data.userInfos);
        if (response.data.userInfos !== undefined) {
          this.UserItems = response.data;
          this.itemIndex = false;
        } else {
          this.itemIndex = true;
          this.MyItems = response.data;
        }
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scopped>
html {
  overflow: scroll;
}

.recipe-one {
  margin-top: 80px;
  margin-bottom: 81px;

  .table {
    // background-color: red;
    float: left;
    text-align: left;
    padding: 0 20px;
    border: 2px dashed #f29eae;
    margin: 5px;

    img {
      width: 13%;
      padding: 10px 0;
      float: left;
    }
  }
  .table2 {
    // background-color: red;
    float: left;
    text-align: left;
    padding: 0 20px;
    border: 2px dashed #f29eae;
    margin: 5px;

    img {
      width: 13%;
      display: inline-block;
      padding: 0px;
      margin-left: 3px;
    }
    p {
      display: inline-block;
      vertical-align: 13px;
      margin: 0px;
      font-weight: bold;
    }
  }

  .table3 {
    // background-color: red;
    float: left;
    text-align: left;
    padding: 0 20px;
    border: 2px dashed #f29eae;
    margin: 5px;

    img {
      width: 100%;
      display: inline-block;
      padding: 0px;
      margin-left: 3px;
    }
  }
  #test_btn1 {
    border-radius: 10px;
    margin-right: 4px;
    border: 1px solid #ed2894;
    background-color: white;
    color: #ed2894;
    padding: 3px;
  }
  #test_btn2 {
    border-radius: 10px;
    margin-right: 4px;
    border: 1px solid rgb(62, 199, 255);
    background-color: white;
    color: rgb(62, 199, 255);
    padding: 3px;
  }
  #test_btn3 {
    border-radius: 10px;
    margin-right: 4px;
    border: 1px solid rgb(242, 226, 23);
    background-color: white;
    color: rgb(242, 226, 23);
    padding: 3px;
  }
}
</style>
