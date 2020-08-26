<template>
  <div class="cart container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">product img</th>
          <th scope="col">prand type</th>
          <th scope="col">product name</th>
          <th scope="col">quantity</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.$store.state.cart" :key="index">
          <td><img src="../assets/imgs/1.jpg" alt="" class="product-img" /></td>
          <td>
            <p class="prand-name">{{ item.productType }}</p>
          </td>
          <td>
            <p class="product-name">{{ item.productName }}</p>
          </td>
          <td>
            <p class="counter-num">
              {{ item.productQuantity }}
            </p>
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click="$store.commit('removeFromCart', item)"
            >
              Delete <i class="fa fa-times"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter(decreaseLimit) {
      // Decrease
      if (this.counter > decreaseLimit) this.counter--;
    },
    resetCounter() {
      this.counter = 0;
    },
  },
};
</script>

<style lang="scss">
.cart {
  padding: 100px 0;
  .product-img {
    max-width: 150px;
    max-height: 150px;
  }
  .prand-name,
  .product-name {
    font-size: 20px;
    color: #666666;
  }
  .list-style {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    .list {
      .btn {
        border: 1px solid;
        border-radius: 0;
        background-color: #666666;
        color: #ffffff;
        &:focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  .counter-num {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #f1ac06;
  }
}
</style>
