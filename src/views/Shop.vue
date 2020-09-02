<template>
  <div class="shop container">
    <loading :active.sync="isLoading"></loading>
    <div class="card-deatails" v-for="product in products" :key="product.id">
      <h1 v-if="product.name == 'Richo'" class="title">Richo</h1>
      <h1 v-else-if="product.name == 'canon'" class="title">canon</h1>
      <h1 v-else class="title">hp</h1>
      <div class="row">
        <CardFilter
          v-for="subproduct in product.models"
          :key="subproduct.id"
          :Cname="subproduct.model_name"
          :Ctype="subproduct.type"
          :Cimg="subproduct.images[0]"
          :Cimgs="subproduct.images"
          :Csize="subproduct.size"
          :Cid="subproduct.id"
          :Cdesc="subproduct.description"
          :Cdriver="subproduct.driver"
          :Cuse="subproduct.how_to_use"
          :Cfeatures="subproduct.features"
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
      filter: "all",
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
};
</script>

<style scoped lang="scss">
.shop {
  padding: 100px 0;
  .header-btns {
    padding: 10px 0;
    .list-style {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      .list {
        margin: 0 20px;
        .products-btn {
          width: 130px;
          background-color: transparent;
          border: 1px solid #f1ac06;
          font-size: 18px;
          transition: 0.2s ease-in-out;
          &:active {
            outline: none;
            box-shadow: none;
          }
          &.active {
            background: #f1ac06;
            color: #ffffff;
          }
          &:hover {
            background-color: #f1ac06;
            color: #ffffff;
          }
        }
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
