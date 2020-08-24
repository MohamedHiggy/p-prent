<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/imgs/logo.png" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop" class="nav-link">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
      <div class="my-2 my-lg-0 shopping-basket">
        <router-link to="/cart">
          <i class="fa fa-shopping-basket fa-2x"></i>
          <span class="counter">0</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
.navbar {
  .navbar-brand {
    width: 100px;
    img {
      width: 100%;
    }
  }
  .collapse {
    .navbar-nav {
      margin: 0 auto;
      .nav-item {
        .nav-link {
          font-size: 22px;
        }
      }
    }
    .shopping-basket {
      position: relative;
      padding: 10px 20px;
      .fa-shopping-basket {
        color: #666666;
      }
      .counter {
        position: absolute;
        background-color: #f1ac06;
        color: #ffffff;
        border-radius: 50%;
        padding: 3px 8px;
        top: 0;
        right: 5px;
        font-weight: bold;
      }
    }
  }
}
</style>
