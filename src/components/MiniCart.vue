<template>
  <div class="mini-cart">
    <div
      class="modal fade"
      id="minicart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">My Bag</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="noitems" v-if="this.$store.state.cart == 0">
              <h1 class="title">No items added!!</h1>
            </div>
            <ul class="list-style">
              <li
                class="list"
                v-for="(item, index) in this.$store.state.cart"
                :key="index"
              >
                <div class="media-body">
                  <p class="m-0 para">
                    <span class="title"> Name: </span>
                    <span class="text-muted"> {{ item.productName }}</span>
                  </p>
                  <p class="m-0 para">
                    <span class="title"> Type: </span>
                    <span class="text-muted"> {{ item.productType }}</span>
                  </p>
                  <p class="m-0 para">
                    <span class="title">Quantity: </span>
                    <span class="text-muted mr-5">
                      {{ item.productQuantity }}</span
                    >
                    <button
                      class="btn btn-danger"
                      @click="$store.commit('removeFromCart', item)"
                    >
                      Delete <i class="fa fa-times"></i>
                    </button>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Continue shopping
            </button>
            <button type="button" class="btn btn-primary" @click="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "miniCart",
  props: {
    msg: String,
  },
  methods: {
    checkout() {
      $("#minicart").modal("hide");
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped lang="scss">
.mini-cart {
  .list-style {
    padding: 0;
    list-style: none;
    .list {
      margin: 10px 0;
      padding: 10px;
      .title {
        font-weight: bold;
      }
      border-bottom: 1px solid #dddddd;
      &:last-child {
        border: none;
      }
    }
  }
  .para {
    font-size: 18px;
  }
}
</style>
