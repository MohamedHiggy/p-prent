<template>
  <div class="home container">
    <div v-if="hasProduct" class="loading">
      <p class="ploading">
        Loading data! <i class="fa fa-spinner fa-spin"></i>
      </p>
    </div>
    <div class="row">
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
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    loadProduct() {
      axios
        .get("http://p-prent.com/api/prints/random")
        .then((res) => {
          const productsJson = res.data.data;
          const productsLength = productsJson.length;
          for (let index = 0; index < productsLength; index++) {
            this.products.push(productsJson[index]);
          }
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.loadProduct();
  },
  computed: {
    hasProduct: function() {
      return this.products.length <= 0;
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 100px 0;
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
