<template>
  <div class="login">
    <form class="form-signin" @submit.prevent="onSubmit">
      <div class="form-row">
        <div
          class="form-group col-lg-12 col-md-12 col-xs-12"
          :class="{ invalid: $v.email.$error }"
        >
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            id="exampleInputEmail1"
            class="form-control"
            placeholder="Enter email"
            v-model="email"
            @blur="$v.email.$touch()"
            autocomplete="off"
            name="name"
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
        <div
          class="form-group col-lg-12 col-md-12 col-xs-12"
          :class="{ invalid: $v.name.$error }"
        >
          <label for="exampleInputname">Name</label>
          <input
            type="text"
            id="exampleInputname"
            class="form-control"
            placeholder="Enter Your name"
            v-model="name"
            name="name"
            @blur="$v.name.$touch()"
          />
          <small class="form-text text-muted" v-if="!$v.name.required"
            >This field must not be empty.</small
          >
        </div>
      </div>
      <div class="form-row">
        <div
          class="form-group col-lg-12 col-md-12 col-xs-12"
          :class="{ invalid: $v.password.$error }"
        >
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            id="exampleInputPassword1"
            class="form-control"
            placeholder="Enter password"
            v-model="password"
            name="password"
            @blur="$v.password.$touch()"
          />
          <small class="form-text text-muted" v-if="!$v.password.required"
            >This field must not be empty.</small
          >
          <small class="form-text text-muted" v-if="!$v.password.minLen"
            >You have to be at least
            {{ $v.password.$params.minLen.min }} character</small
          >
        </div>
      </div>
      <div class="form-row">
        <div
          class="form-group col-lg-12 col-md-12 col-xs-12"
          :class="{ invalid: $v.confirmPassword.$error }"
        >
          <label for="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            id="exampleInputPassword2"
            class="form-control"
            placeholder="Enter password"
            v-model="confirmPassword"
            name="confirmPassword"
            @blur="$v.confirmPassword.$touch()"
          />
          <small class="form-text text-muted" v-if="!$v.confirmPassword.sameAs"
            >This field must be sameAs your password</small
          >
        </div>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        :disabled="$v.$invalid"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(8),
    },
    name: {
      required,
    },
    confirmPassword: {
      required,
      sameAs: sameAs((vm) => {
        return vm.password;
      }),
    },
  },
  methods: {
    onSubmit() {
      const SignupData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      console.log(SignupData);
      //this.$store.dispatch('signup', SignupData)
    },
  },
};
</script>

<style lang="scss">
.login {
  height: 80vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ffffff;
  .form-signin {
    border-radius: 5px;
    width: 100%;
    max-width: 330px;
    padding: 30px;
    margin: auto;
    height: auto;
    box-shadow: 0px 0px 7px 2px #bbbaba;
  }
  .form-group.invalid input {
    border-color: red;
  }
  .form-signin .checkbox {
    font-weight: 400;
    label {
      cursor: pointer;
    }
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
