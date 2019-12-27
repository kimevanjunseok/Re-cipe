<template>
  <div class="recipe-create">
    <h2>NEW RE:CIPE</h2>
    <div>
      <div style="width: 55%; display:inline-block;">
        <input
          id="input-picture"
          type="file"
          accept="image/*"
          @change="pictureChange($event)"
          style="margin-bottom: 13px; padding-top: 3px; margin-right: 4px;"
          required
        />
      </div>
      <label
        for="input-picture"
        style="display:inline-block; width: 40%; font-size: 11px; z-index: -1;"
        >* 완성사진을 업로드 해주세요.</label
      >
      <input
        v-model="name"
        type="text"
        placeholder="요리 이름을 입력해주세요."
        required
      />
      <input
        v-model="userIngredients"
        type="text"
        placeholder="요리 재료를 입력해주세요."
        style="margin-top: 15px;"
        required
      />
      <div class="select">
        <select v-model="nation" required>
          <option v-for="country in nations" :key="country">{{
            country
          }}</option>
        </select>
        <div class="select__arrow"></div>
      </div>
      <div class="select">
        <select v-model="level" required>
          <option v-for="lel in levels" :key="lel">{{ lel }}</option>
        </select>
        <div class="select__arrow"></div>
      </div>
      <div class="select">
        <select v-model="category" required>
          <option v-for="categy in categories" :key="categy">{{
            categy
          }}</option>
        </select>
        <div class="select__arrow"></div>
      </div>
      <div class="select">
        <select v-model="qnt" required>
          <option v-for="qt in qnts" :key="qt">{{ qt }}</option>
        </select>
        <div class="select__arrow"></div>
      </div>
    </div>
    <br />
    <div v-for="(info, index) in userInfos" v-bind:key="index">
      <div class="inputForm">
        <label for="fileInput"
          ><b>STEP {{ index + 1 }}</b></label
        >
        <i class="fas fa-times-circle" @click="deleteInfo(index)"></i>
        <hr />
        <div class="imageBox">
          <label v-bind:for="index">
            <img v-bind:src="info.file" alt />
          </label>
          <input
            type="file"
            v-bind:id="index"
            accept="image/*"
            @change="imageChange(index, $event)"
          />
        </div>
        <textarea
          v-model="info.content"
          placeholder="조리 과정에 관한 설명을 적어주세요."
        />
      </div>
      <i class="fas fa-plus-circle" @click="addNewInfo(index)"></i>
    </div>
    <button class="btn-submit" @click="newSubmit()">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recipeCreatePage",
  data() {
    return {
      name: "",
      userid: JSON.parse(sessionStorage.getItem("userinfo")),
      step: 0,
      userIngredients: [],
      userInfos: [
        {
          content: "",
          file: require("@/assets/uploadImage.png")
        }
      ],
      picture: "",
      summary: "",
      nation: "한식",
      level: "초보환영",
      category: "간단요리/간식/도시락",
      cal: "",
      qnt: "1인분",

      nations: ["한식", "중국", "일본", "이탈리아", "서양", "퓨전"],
      levels: ["초보환영", "보통", "어려움"],
      categories: [],
      qnts: ["1인분", "2인분", "3인분", "4인분", "기타"]
    };
  },
  mounted() {
    this.$http.get("http://localhost:3000/api/recipe/category").then(res => {
      this.categories = res.data.sort();
    });
  },
  methods: {
    async newSubmit() {
      await axios
        .post("http://localhost:3000/api/recipe/create", {
          name: this.name,
          userid: this.userid,
          userIngredients: this.userIngredients,
          userInfos: this.userInfos,
          picture: this.picture,
          summary: this.summary,
          nation: this.nation,
          level: this.level,
          category: this.category,
          cal: this.cal,
          qnt: this.qnt
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addNewInfo(index) {
      this.userInfos.splice(index + 1, 0, {
        content: "",
        file: require("@/assets/uploadImage.png")
      });

      this.step = this.step + 1;
    },
    deleteInfo(index) {
      this.userInfos.splice(index, 1);
      if (this.userInfos.length == 0) {
        this.userInfos.push({
          content: "",
          file: require("@/assets/uploadImage.png")
        });
        this.step = 0;
      } else {
        this.step = this.step - 1;
      }
    },
    imageChange(index, event) {
      let img = event.target;
      let imgInfo = this.userInfos;

      let reader = new FileReader();
      reader.onload = async function() {
        let dataURL = await reader.result;
        imgInfo[index].file = dataURL;
      };

      reader.readAsDataURL(img.files[0]);
    },
    pictureChange(event) {
      let img = event.target;
      let picture = this.picture;

      let reader = new FileReader();
      reader.onload = async function() {
        let dataURL = await reader.result;
        picture = dataURL;
        console.log(picture);
      };

      reader.readAsDataURL(img.files[0]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scopped>
html {
  overflow: scroll;
}
.recipe-create {
  margin-top: 70px;
  margin-bottom: 81px;
  .inputForm {
    margin: 3px 9px;
    border: solid 1px #7b7b7b;
    border-radius: 10px;
    label {
      font-size: 18px;
      color: #de3d80;
    }
    i {
      float: right;
    }
  }
  h2 {
    color: #797979;
  }
  i:active {
    color: #ed2894;
  }
  input {
    width: 90%;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding-left: 16px;
  }
  input:focus {
    outline: none;
  }
  textarea {
    width: 90%;
    height: 50px;
  }
  .hi {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }

  .imageBox {
    label {
      img {
        width: 300px;
        // height: 200px;
      }
    }
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }
  .select {
    position: relative;
    display: inline-block;
    margin-top: 15px;
    width: 49%;
  }
  .select select {
    display: inline-block;
    width: 93%;
    cursor: pointer;
    padding: 8px 15px;
    outline: 0;
    border: 0;
    border-radius: 15px;
    background: #eee;
    color: #7b7b7b;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .select select::-ms-expand {
    display: none;
  }
  .select select:hover,
  .select select:focus {
    color: #000;
    background: #ccc;
  }
  .select select:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .select__arrow {
    position: absolute;
    top: 11px;
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: #7b7b7b transparent transparent transparent;
  }
  .select select:hover ~ .select__arrow,
  .select select:focus ~ .select__arrow {
    border-top-color: #000;
  }
  .select select:disabled ~ .select__arrow {
    border-top-color: #ccc;
  }
  .btn-submit {
    background-color: #f29eae;
    color: white;
    cursor: pointer;
    height: 40px;
    width: 85px;
    font-size: 18px;
    border: 1px solid #f29eae;
    border-radius: 12px;
    font-weight: 600;
    margin-top: 23px;
  }
}
</style>
