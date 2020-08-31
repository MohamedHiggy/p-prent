<template>
  <div class="cart container">
    <!-- if no product show item here -->
    <div class="noitems" v-if="this.$store.state.cart == 0">
      <h1 class="title">No items added!!</h1>
    </div>
    <div class="Main-table" v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">prand type</th>
            <th scope="col">product name</th>
            <th scope="col">quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in this.$store.state.cart" :key="index">
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
      <button class="btn btn-popup" @click="completePurchase()">
        Complete the purchase process
      </button>
    </div>
    <formCart />
  </div>
</template>

<script>
import $ from "jquery";
import formCart from "@/components/FormModel.vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    formCart,
  },
  methods: {
    completePurchase() {
      $("#completePurchase").modal("show");
    },
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
  .btn-popup {
    background-color: #f1ac06;
    color: #ffffff;
    &:focus {
      box-shadow: none;
      outline: none;
    }
    &:hover {
      color: #ffffff;
    }
  }
  .noitems {
    padding: 20px 0;
    text-align: center;
  }
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
