<template>
  <div class="login">
    <form class="form-signin" @submit.prevent="onSubmit">
      <p>admin@app.com</p>
      <div class="form-row">
        <div class="form-group col-lg-12 col-md-12 col-xs-12">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            id="exampleInputEmail1"
            class="form-control"
            placeholder="Enter email"
            v-model="form.email"
            autocomplete="off"
            name="name"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-lg-12 col-md-12 col-xs-12">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            id="exampleInputPassword1"
            class="form-control"
            placeholder="Enter password"
            v-model="form.password"
            name="password"
          />
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    onSubmit() {
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: "Profile"
        });
      });
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
