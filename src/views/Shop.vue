<template>
  <div class="shop container">
    <loading :active.sync="isLoading"></loading>
    <div class="filter">
      <div class="myradio">
        <input
          class="myradio__input"
          type="radio"
          name="radiofilter"
          id="All"
          v-model="filter"
          value="All"
        />
        <label for="All" class="myradio__label">All</label>
      </div>

      <div class="myradio">
        <input
          class="myradio__input"
          type="radio"
          name="radiofilter"
          id="Richo"
          v-model="filter"
          value="Richo"
        />
        <label for="Richo" class="myradio__label">Richo</label>
      </div>

      <div class="myradio">
        <input
          class="myradio__input"
          type="radio"
          name="radiofilter"
          id="canon"
          v-model="filter"
          value="canon"
        />
        <label for="canon" class="myradio__label">Canon</label>
      </div>

      <div class="myradio">
        <input
          class="myradio__input"
          type="radio"
          name="radiofilter"
          id="hp"
          v-model="filter"
          value="hp"
        />
        <label for="hp" class="myradio__label">Hp</label>
      </div>
    </div>
    <div class="card-deatails">
      <div class="row">
        <CardFilter
          v-for="(product, index) in filteredproduct"
          :key="index"
          :Cname="product.model_name"
          :Cbrand="product.brand_name"
          :Ctype="product.type"
          :Cimg="product.images[0]"
          :Cimgs="product.images"
          :Csize="product.size"
          :Cid="product.id"
          :Cdesc="product.description"
          :Cdriver="product.driver"
          :Cuse="product.how_to_use"
          :Cfeatures="product.features"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import CardFilter from "../components/CardFilter.vue";
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      filter: "All",
    };
  },
  methods: {
    loadProduct() {
      this.isLoading = true;
      axios
        .get("http://p-prent.com/api/fmeb")
        .then((res) => {
          const productsJson = res.data.data;
          const productsLength = productsJson.length;
          for (let index = 0; index < productsLength; index++) {
            this.products.push(productsJson[index]);
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.loadProduct();
  },
  components: {
    CardFilter,
    Loading,
  },
  computed: {
    filteredproduct: function() {
      var vm = this;
      var category = vm.filter;

      if (category === "All") {
        return vm.products;
      } else {
        return vm.products.filter(function(product) {
          return product.brand_name === category;
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
.shop {
  padding: 100px 0;
  .filter {
    position: relative;
    padding: 10px 0;
    width: 100%;
    text-align: center;

    .myradio {
      display: inline-block;
      border-radius: 999px;
      margin: 5px;
      .myradio__input {
        opacity: 0;
        position: absolute;
      }

      .myradio__label {
        border: 1px solid #ffffff;
        border-radius: 9999px;
        padding: 3px 15px 3px 40px;
        cursor: pointer;
        position: relative;
        transition: all 0.5s;
      }

      .myradio__label::before,
      .myradio__label::after {
        content: "";
        border-radius: 9999px;
        width: 16px;
        height: 16px;
        margin: 3px 0;
        position: absolute;
        z-index: 1;
      }
      .myradio__label::before {
        background-color: #dcdcdc;
        border: 2px solid #dcdcdc;
        top: 4px;
        left: 10px;
        transition: all 0.5s;
      }

      .myradio__label::after {
        background-color: #ffffff;
        top: 4px;
        left: 10px;
        transition: all 0.15s;
        transition-timing-function: ease-out;
      }
      .myradio__label:hover {
        color: #ffffff;
        background-color: #f1ac06;
        border: 1px solid #f1ac06;
      }
      .myradio__label:hover::before {
        border: 2px solid #f1ac06;
      }
      .myradio__input:checked ~ .myradio__label::before {
        background-color: #f1ac06;
        border: 2px solid #f1ac06;
      }
      .myradio__input:checked ~ .myradio__label::after {
        width: 10px;
        height: 10px;
        top: 7px;
        left: 13px;
      }
      .myradio__input:checked ~ .myradio__label {
        color: #ffffff;
        background-color: #f1ac06;
        border: 1px solid #f1ac06;
      }
    }
  }
  .card-deatails {
    padding: 25px 0;
    .title {
      text-align: center;
      font-size: 50px;
      font-weight: bold;
      &::after {
        content: "";
        display: block;
        width: 200px;
        height: 5px;
        background-color: #f1ac06;
        margin: 10px auto 60px;
      }
    }
  }
}
</style>
