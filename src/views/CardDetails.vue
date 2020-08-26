<template>
  <div class="card-details">
    <addToCart />
  </div>
</template>

<script>
// @ is an alias to /src
import addToCart from "@/components/AddToCart.vue";
export default {
  components: {
    addToCart
  },
}
</script>


<style lang="scss">
.card-details {
  padding: 100px 0;
}
</style>
