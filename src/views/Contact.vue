<template>
  <div class="contact container">
    <form @submit.prevent="FormContact">
      <div class="form-row">
        <div
          class="form-group col-lg-6 col-md-6 col-xs-12"
          :class="{ invalid: $v.name.$error }"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            v-model="name"
            @blur="$v.name.$touch()"
            name="name"
          />
          <small class="form-text text-muted" v-if="!$v.name.required"
            >This field must not be empty.</small
          >
        </div>

        <div
          class="form-group col-lg-6 col-md-6 col-xs-12"
          :class="{ invalid: $v.email.$error }"
        >
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            v-model="email"
            @blur="$v.email.$touch()"
            name="email"
          />
          <small class="form-text text-muted" v-if="!$v.email.email"
            >Please provide a valid email address.</small
          >
          <small class="form-text text-muted" v-if="!$v.email.required"
            >This field must not be empty.</small
          >
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12" :class="{ invalid: $v.body.$error }">
          <textarea
            class="form-control"
            rows="7"
            placeholder="Enter Your msg"
            v-model="body"
            @blur="$v.body.$touch()"
            name="body"
          ></textarea>

          <small class="form-text text-muted" v-if="!$v.body.required"
            >This field must not be empty.</small
          >
        </div>
      </div>
      <button type="submit" class="btn btn-send" :disabled="$v.$invalid">
        Send
      </button>
    </form>
    <notifications group="foo" position="center right" />
    <notifications group="app" position="bottom right" />
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import notifications from "../helpers/Notifications";
export default {
  data() {
    return {
      name: "",
      email: "",
      body: "",
    };
  },
  validations: {
    name: {
      required,
    },
    body: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    FormContact() {
      const x = {
        name: this.name,
        email: this.email,
        body: this.body,
      };
      const formDataContact = JSON.stringify(x);
      console.log(formDataContact);
      axios
        .post("http://p-prent.com/api/contact", formDataContact, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
        })
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          notifications.push(
            "foo",
            "<b> Mail send successfully </b>",
            "Important message",
            "success"
          );
        })
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
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
  .form-group.invalid input {
    border-color: red;
  }
  .form-group.invalid textarea {
    border-color: red;
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
