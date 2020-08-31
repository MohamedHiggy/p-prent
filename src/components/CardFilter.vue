<template>
  <div class="card-filter col-lg-4 col-md-4 col-xs-12">
    <div class="card" style="height: 100%">
      <img class="card-img-top" :src="Cimg.images" />
      <div class="card-body">
        <h5 class="card-title">
          Type: <span>{{ Ctype }}</span>
        </h5>
        <h5 class="card-title">
          Name: <span>{{ Cname }}</span>
        </h5>
        <h5 class="card-title">
          Size: <span>{{ Csize }}</span>
        </h5>
        <router-link
          class="btn btn-primary"
          :to="{
            name: 'CardDetails',
            params: {
              id: Cid,
              name: Cname,
              type: Ctype,
              size: Csize,
              desc: Cdesc,
              driver: Cdriver,
              imgs: Cimgs,
              use: Cuse,
              features: Cfeatures
            },
          }"
        >
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardFilter",
  props: [
    "Cname",
    "Ctype",
    "Cimg",
    "Cimgs",
    "Csize",
    "Cid",
    "Cdesc",
    "Cdriver",
    "Cuse",
    "Cfeatures",
  ],
};
</script>

<style lang="scss">
.card-filter {
  margin: 10px 0;
  .card {
    .card-body {
      .card-title {
        span {
          color: #666666;
        }
      }
    }
  }
}
</style>
