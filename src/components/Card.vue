<template>
  <div class="col-lg-3 col-md-3">
    <div class="card" style="height: 100%;">
      <img class="card-img-top" :src="pimg.images" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ pname }}</h5>
        <router-link to="/details" class="btn btn-primary">
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["pname", "pimg"],
};
</script>

<style lang="scss">
.card {
  position: relative;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 7px 2px #dddddd;
  }
  .card-img-top {
    height: 55%;
  }
  .card-body {
    position: relative;
    .card-title {
      font-weight: normal;
    }
    .btn {
      background-color: #f1ac06;
      border: none;
      color: #ffffff;
      width: 150px;
      &:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
}
</style>
