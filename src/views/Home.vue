<template>
  <div class="home">
    <div class="mb-5 container">
      <carousel
        :perPage="1"
        :autoplay="true"
        :loop="true"
        :autoplay-timeout="3000"
      >
        <slide>
          <img src="../assets/imgs/1.png" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/2.png" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/4.jpg" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/5.jpg" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/6.jpg" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/7.jpg" alt="Card image cap" />
        </slide>
        <slide>
          <img src="../assets/imgs/8.jpg" alt="Card image cap" />
        </slide>
      </carousel>
    </div>
    <div class="mt-5 container">
      <div class="row">
        <loading :active.sync="isLoading"></loading>
        <Card
          v-for="product in products"
          :key="product.id"
          :pname="product.model_name"
          :pid="product.id"
          :pimg="product.images"
          :pdesc="product.description"
          :pfeatures="product.features"
          :ptype="product.type"
          :psize="product.size"
          :puse="product.how_to_use"
          :pdriver="product.driver"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import axios from "axios";

// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Home",
  components: {
    Card,
    Loading,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    loadProduct() {
      this.isLoading = true;
      axios
        .get("http://p-prent.com/api/prints/random")
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
};
</script>

<style lang="scss">
.home {
  padding: 100px 0;
  .VueCarousel {
    width: 100%;
    img {
      width: 100%;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
      object-fit: cover;
    }
  }
  .loading {
    padding: 200px 50px;
    height: 50vh;
    text-align: center;
    .ploading {
      font-size: 28px;
      font-weight: bold;
      color: #666666;
    }
  }
}
</style>
