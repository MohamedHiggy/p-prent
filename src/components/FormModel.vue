<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="completePurchase"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <loading :active.sync="isLoading" :can-cancel="true"></loading>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Your Data</h5>
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
          <form @submit.prevent="Formpurchase">
            <div class="form-group">
              <label for="name">Your name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                name="name"
                id="name"
                placeholder="Enter Your name"
              />
            </div>

            <div class="form-group">
              <label for="Company-name">Company name</label>
              <input
                type="text"
                class="form-control"
                v-model="companyname"
                name="companyname"
                id="Company-name"
                placeholder="Enter Company name"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                name="email"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Subscription Type</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                name="purchase-subscriptions"
                v-model="purchaseubscriptions"
                @change="ChangeEvent"
              >
                <option disabled selected="selected">
                  subscriptions of the player
                </option>
                <option
                  :value="option.type"
                  v-for="option in options"
                  :key="option.id"
                >
                  {{ option.type }}
                </option>
              </select>
              <img src="../assets/down-arrow.svg" class="select-arrow" alt="" />
            </div>

            <div class="form-group" v-if="showpicker">
              <label for="inputaddress" style="display:block">
                Start to end event
              </label>
              <date-picker
                name="user-playerpicker"
                v-model="userpicker"
                lang="en"
                type="date"
                format="YYYY-MM-DD"
                value-type="format"
                range
                placeholder="expire date"
              >
              </date-picker>
            </div>
            <div class="form-group">
              <label for="exampleInputphone">Phone number</label>
              <input
                type="text"
                class="form-control"
                v-model="phone"
                name="phone"
                id="exampleInputphone"
                placeholder="Enter Phone number"
              />
            </div>
            <div class="btns">
              <button type="submit" class="btn-form btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-form"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <notifications group="foo" position="center right" />
    <notifications group="app" position="bottom right" />
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import notifications from "../helpers/Notifications";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      isLoading: false,
      name: "",
      companyname: "",
      email: "",
      phone: "",
      purchaseubscriptions: "",
      userpicker: "",
      showpicker: false,
      options: [
        { id: 1, type: "yearly" },
        { id: 2, type: "event" },
      ],
    };
  },
  components: {
    Loading,
    DatePicker,
  },
  computed: {
    getCartData() {
      return this.$store.state.cart;
    },
  },
  methods: {
    ChangeEvent: function(e) {
      if (e.target.value == "yearly") {
        this.showpicker = false;
        this.userpicker = null;
      } else {
        this.showpicker = true;
      }
    },
    Formpurchase() {
      this.isLoading = true;
      const x = {
        user_name: this.name,
        user_email: this.email,
        user_company_name: this.companyname,
        user_phone: this.phone,
        user_subscriptions: this.purchaseubscriptions,
        user_datapicker: this.userpicker,
        data: this.getCartData,
      };
      const formDatapurchase = JSON.stringify(x);
      console.log(formDatapurchase);
      axios
        .post("http://p-prent.com/api/contact", formDatapurchase)
        .then(() => {
          $("#completePurchase").modal("hide");
          this.isLoading = false;
          notifications.push(
            "foo",
            "<b> Mail send successfully </b>",
            "Important message",
            "success"
          );
        })
        .catch(() => {
          $("#completePurchase").modal("hide");
          this.isLoading = false;
          notifications.push(
            "app",
            "<b> Mail not send </b>",
            "Important message",
            "error"
          );
        });
    },
  },
};
</script>

<style lang="scss">
.form-group {
  position: relative;
  .form-control {
    border-radius: 0;
    &:focus {
      border-color: #f1ac06;
      box-shadow: none;
      outline: none;
    }
  }
  .mx-datepicker {
    width: 100%;
  }
  select {
    cursor: pointer;
    -o-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .select-arrow {
    position: absolute;
    top: 48px;
    right: 20px;
  }
}
.vue-notification {
  padding: 15px;
  margin: 0 5px 5px;
  font-size: 18px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
.btns {
  text-align: center;
  .btn-form {
    width: 150px;
    margin: 0 15px;
  }
}
</style>
