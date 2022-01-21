<template>

  <div v-if="productList.length>0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
      <product v-for="product in productList">
        <img class="card-img-top"
             :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage"
             alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <small>
            <strong>Adet : </strong> {{ product.count }}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> {{ product.price }}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> {{ product.totalPrice }}
          </small>
        </div>
      </product>
    </div>

  </div>
</template>

<script>
import Product from "./Product";
import {eventBus} from "../main";

export default {
  name: "Products",
  components: {
    product: Product
  },
  data: function () {
    return {
      productList: []
    }
  }, created() {
    eventBus.$on("productAdded", (data) => {
      if (this.productList.length < 10) {
        this.productList.push(data);
        eventBus.$emit("progressBarUpdated", this.productList.length)
      } else {
        alert("Maksimum ürün ekleme adedine ulaştınız.")
      }

    })
  }
}
</script>

<style scoped>

</style>