<template>
  <div class="card-details container">
    <div class="header">
      <carousel :perPage="2" :autoplay="true" :loop="true">
        <slide v-for="(img, index) in products.images" :key="index">
          <img class="card-img-top" :src="img.images" alt="Card image cap" />
        </slide>
      </carousel>
    </div>
    <div class="middle">
      <ul class="list-style">
        <li class="list">
          <span class="title">Name: </span>
          <span class="title-desc">
            {{ products.model_name }}
          </span>
        </li>
        <li class="list">
          <span class="title">Type: </span>
          <span class="title-desc"> {{ products.type }}</span>
        </li>
        <li class="list">
          <span class="title">Size: </span>
          <span class="title-desc"> {{ products.size }}</span>
        </li>
        <li class="list">
          <span class="title">Description: </span>
          <span class="title-desc"> {{ products.description }}</span>
        </li>
        <li class="list">
          <h3 class="title">Features :</h3>
          <ul
            class="list-style-two"
            v-for="(feature, index) in products.features"
            :key="index"
          >
            <li class="list-two">
              <i class="fa fa-angle-double-right"></i>
              <span class="features">{{ feature.feature }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <button class="btn">Add to cart</button>
      <a :href="products.how_to_use" class="btn">
        Download How to use
        <i class="fa fa-download"></i>
      </a>
      <a :href="products.driver" class="btn">
        Download the profile
        <i class="fa fa-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    axios
      .get(`http://p-prent.com/api/models/${id}`)
      .then((res) => {
        if (res.data.data != null) {
          this.products = res.data.data;
        } else {
          this.$router.push({ name: "NotFoundPage" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.card-details {
  padding: 100px 0;
  .middle {
    padding: 15px 0;

    .list-style {
      margin: 0;
      list-style: none;
      .list {
        margin: 15px 0;
        .title {
          font-size: 22px;
          font-weight: bold;
        }
        .title-desc {
          font-size: 20px;
          color: #555555;
        }
        .list-style-two {
          padding: 0;
          margin: 0;
          list-style: none;
          .list-two {
            margin: 10px 0;
            i {
              margin-right: 10px;
            }
            .features {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .bottom {
    padding: 0 0 0 25px;
    .btn {
      background-color: #f1ac06;
      color: #ffffff;
      font-size: 18px;
      margin: 10px;
      i {
        margin-left: 10 px;
      }
      &:focus {
        box-shadow: none;
        outline: none;
      }
    }
  }
}
</style>
