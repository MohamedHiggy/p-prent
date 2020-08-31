<template>
  <div class="shop container">
    <div class="header-btns">
      <ul class="list-style">
        <li class="list">
          <button
            class="products-btn"
            @click="filter = 'all'"
            :class="{ active: filter == 'all' }"
            value="All"
          >
            All
            <span class="product-num">{{ products.length }}</span>
          </button>
        </li>
        <li class="list">
          <button
            class="products-btn"
            @click="filter = 'Richo'"
            :class="{ active: filter == 'Richo' }"
            value="Richo"
          >
            Richo
            <span class="product-num">{{ products.length }}</span>
          </button>
        </li>
        <li class="list">
          <button
            class="products-btn"
            @click="filter = 'canon'"
            :class="{ active: filter == 'canon' }"
            value="canon"
          >
            Canon
            <span class="product-num">50</span>
          </button>
        </li>
        <li class="list">
          <button
            class="products-btn"
            @click="filter = 'hp'"
            :class="{ active: filter == 'hp' }"
            value="canon"
          >
            Hp
            <span class="product-num">50</span>
          </button>
        </li>
      </ul>
    </div>
    <loading :active.sync="isLoading"></loading>
    <div
      class="card-deatails row"
      v-for="product in products"
      :key="product.id"
    >
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
        .catch((err) => {
          console.log(err);
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
    filteredproducts: function() {
      var vm = this;
      var category = vm.filter;

      if (category === "All") {
        return vm.products;
      } else {
        return vm.products.filter(function(a) {
          return a.category === name;
        });
      }
    },
  },
};
</script>

<style lang="scss">
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
  }
}
</style>
