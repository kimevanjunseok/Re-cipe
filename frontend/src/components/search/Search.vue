<template>
    <div style="margin-top:100px;">
        <input type="text" class="input-search" v-on:keyup.enter="Ingredient_search()" v-model="ingredient">
        <button class="btn-search">검색</button>
        <p class="p-ingredient" v-show="error.ingredient">{{ error.ingredient }}</p>
        <div class="md-chips" id="md-chips"></div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            data: "",
            error: {
                ingredient: ""
            },
            ingredient: "",
            ingredients: [],
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
    mounted() {
        document.getElementById('md-chips').onclick = (res) => {
            if (res.path[0].id) {
                this.Ingredient_delete(res.path[0].id)
            }
        };
    },
    methods: {
        Ingredient_search: function() {
            if (this.ingredient.split(' ') == this.ingredient) {
                if (this.ingredients.length > 9) {
                    this.error.ingredient = "10개 이하로 입력해주세요!"
                } else {
                    if (this.ingredients.includes(this.ingredient)) {
                        this.error.ingredient = "이미 넣은 재료입니다"
                    } else {
                        $('.md-chips').append(`<div class="md-chip" id="${this.ingredient}">
                                                <span>${this.ingredient}</span>
                                                <button type="button" id="${this.ingredient}" class="md-chip-remove">
                                                </button>
                                            </div>`)
                        this.ingredients.push(this.ingredient)
                        this.error.ingredient = ""
                    }
                }
                this.ingredient = ""
            }
        },
        Ingredient_delete(ingredient_data) {
            var cnt = 0
            this.ingredients.some(element => {
                if (element === ingredient_data){
                    return true
                } else {
                    cnt += 1
                }
            });
            this.ingredients.splice(cnt, 1)
            $('.md-chip').remove('#' + `${ingredient_data}`)
        },
    }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

$md-chip-height: 32px;
$md-chip-color: #e0e0e0;

.md-chip {
  display: inline-block;
  background: $md-chip-color;
  padding: 0 12px;
  border-radius: 32px;
  font-size: 13px;
  &.md-chip-hover:hover {
    background: #ccc;
  }
}

.md-chip-remove {
  display: inline-block;
  background: #aaa;
  border: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 0;
  margin: 0 -4px 0 4px;
  cursor: pointer;
  font: inherit;
  line-height: 20px;
  &:after { 
    color: $md-chip-color;
    content: 'x';
  }
  &:hover {
    background: #999;
  }
  &:active {
    background: #777;
  }
}

.input-search {
    width: 50%;
    height: 25px;
}

.md-chips {
  padding: 12px 0;
  .md-chip {
    margin: 0 5px 3px 0;
  } 
}

.p-ingredient {
    font-size: 70%;
    margin: 0px;
    color: red;
}
.btn-search {
    background-color: #FF92B1;
    color: white;
    padding: 10px 20px;
    margin: 2%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>