<template>
  <div class="contact container">
    <form @submit.prevent="FormContact">
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            v-model="name"
            name="name"
          />
        </div>
        <div class="form-group col-lg-6 col-md-6 col-xs-12">
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            v-model="email"
            name="email"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12">
          <textarea
            class="form-control"
            rows="7"
            placeholder="Enter Your msg"
            v-model="body"
            name="body"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="btn ">Send</button>
    </form>
    <notifications group="foo" position="center right" />
    <notifications
      group="app"
      position="center left"
      animation="animation"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      body: "",
    };
  },
  methods: {
    FormContact() {
      const formDataContact = {
        name: this.name,
        email: this.email,
        body: this.body,
      };
      axios
        .post("http://p-prent.com/api/contact", formDataContact)
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          this.$notify({
            group: "foo",
            type: "success",
            title: "Important message",
            text: "<b> Mail send successfully</b>",
            duration: 1000,
            speed: 2000,
            clean: true
          });
        })
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          this.$notify({
            group: "app",
            type: "error",
            title: "Important message",
            text: "<b> Mail not send </b>",
            duration: 1000,
            speed: 2000,
          });
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
  height: 85vh;
  padding: 100px 0;
  .form-control {
    border-radius: 0;
    &:focus {
      border-color: #f1ac06;
      outline: none;
      box-shadow: none;
    }
  }
  .btn {
    width: 150px;
    background-color: #f1ac06;
    color: #ffffff;
    font-size: 18px;
    &:hover {
      background-color: #cc9107;
      color: #ffffff;
    }
  }
  textarea {
    resize: none;
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
}
</style>
