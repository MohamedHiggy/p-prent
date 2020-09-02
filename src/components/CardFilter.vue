<template>
  <div class="card-filter col-lg-4 col-md-4 col-xs-12">
    <div class="card" style="height: 100%">
      <img class="card-img-top" :src="Cimg.images" />
      <div class="card-body">
        <h5 class="card-title">
          Type: <span>{{ Ctype }}</span>
        </h5>
        <h5 class="card-title">
          Name: <span>{{ Cname }}</span>
        </h5>
        <h5 class="card-title">
          Size: <span>{{ Csize }}</span>
        </h5>
        <router-link
          class="btn btn-primary"
          :to="{
            name: 'CardDetails',
            params: {
              id: Cid,
            },
          }"
        >
          Details
        </router-link>
        <button class="btn add-to-cart" @click="addToCart()">
          Add to cart
        </button>
      </div>
    </div>
    <minicart />
  </div>
</template>

<script>
import $ from "jquery";
import minicart from "@/components/MiniCart.vue";
export default {
  name: "cardFilter",
  methods: {
    addToCart() {
      $("#minicart").modal("show");
      this.$store.commit("addToCart", this.item);
    },
  },
  components: {
    minicart,
  },
  props: [
    "Cname",
    "Ctype",
    "Cimg",
    "Cimgs",
    "Csize",
    "Cid",
    "Cdesc",
    "Cdriver",
    "Cuse",
    "Cfeatures",
  ],
  data() {
    return {
      item: {
        productName: this.Cname,
        productType: this.Ctype,
        productQuantity: 1,
        productId: this.Cid,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.card-filter {
  margin: 10px 0;
  .card {
    .card-body {
      .card-title {
        span {
          color: #666666;
        }
      }
    }
    .add-to-cart {
      margin-left: 15px;
      background-color: rgb(56, 202, 31);
      color: #ffffff;
    }
  }
}
</style>
