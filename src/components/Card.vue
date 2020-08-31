<template>
  <div class="col-lg-3 col-md-3 col-xs-12">
    <div class="card" style="height: 100%;">
      <carousel :perPage="1">
        <slide v-for="(img, index) in pimg" :key="index.id">
          <img class="card-img-top" :src="img.images" alt="Card image cap" />
        </slide>
      </carousel>
      <div class="card-body">
        <p class="card-details">
          <span class="title">Type:</span>
          {{ ptype }}
        </p>
        <p class="card-details">
          <span class="title">Name:</span>
          {{ pname }}
        </p>
        <ul class="list-style">
          <li class="list">
            <router-link
              class="btn btn-primary"
              :to="{
                name: 'CardDetails',
                params: {
                  id: pid,
                },
              }"
            >
              Details
            </router-link>
          </li>
          <li class="list">
            <!--<addToCartBtn ptype pname pid />-->
            <button class="btn add-to-cart" @click="addToCart()">
              Add to cart
            </button>
          </li>
        </ul>
      </div>
    </div>
    <minicart />
  </div>
</template>

<script>
import $ from "jquery";
import minicart from "@/components/MiniCart.vue";
export default {
  name: "Card",
  props: [
    "pname",
    "pimg",
    "pdesc",
    "ptype",
    "psize",
    "pfeatures",
    "puse",
    "pdriver",
    "pid",
  ],
  data() {
    return {
      item: {
        productName: this.pname,
        productType: this.ptype,
        productQuantity: 1,
        productId: this.pid,
      },
    };
  },
  components: {
    minicart,
  },
  methods: {
    addToCart() {
      $("#minicart").modal("show");
      this.$store.commit("addToCart", this.item);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 7px 2px #dddddd;
  }
  .VueCarousel {
    height: 323px;
  }
  .card-body {
    .card-details {
      font-size: 20px;
      color: #333333;
      padding: 0;
      .title {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .card-title {
      font-weight: normal;
    }
    .list-style-two {
      list-style: none;
      padding: 0;
      .list {
        color: #333333;
        font-size: 18px;
        i {
          color: #f1ac06;
          margin-right: 10px;
        }
        .btn-drivers {
          background-color: transparent;
          border: 1px solid;
          color: #f1ac06;
          margin: 10px 0;
        }
      }
    }
    .list-style {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-around;
    }
    .btn {
      background-color: #f1ac06;
      border: none;
      color: #ffffff;
      &:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    }
    .add-to-cart {
      background-color: rgb(56, 202, 31);
    }
  }
}
</style>
