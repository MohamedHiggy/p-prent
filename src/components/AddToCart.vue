<template>
  <div class="Add-to-cart">
    <button class="btn add-to-cart">
      {{ pName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    productName: String,
    productType: String,
    productId: String,
  },
  data() {
    return {
      pName: this.productName,
      pType: this.productType,
      pId: this.productId,
    };
  },
};
</script>

<style lang="scss"></style>
