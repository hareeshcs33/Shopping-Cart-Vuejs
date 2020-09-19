<template>
  <div class="main-wrapper">
    <filters></filters>
    <div class="best-seller-block">
      <card-bestseller :productType="'Premium'"></card-bestseller>
      <card-bestseller :productType="'Economy'"></card-bestseller>
    </div>
    <div class="product-cards">
      <card-product :isStock="'inStock'"></card-product>
      <card-product :isStock="'alertStock'"></card-product>
      <card-product :isStock="'noStock'"></card-product>
      <card-product :isStock="'inStock'"></card-product>
      <card-product :isStock="'inStock'"></card-product>
      <card-product :isStock="'inStock'"></card-product>
    </div>
    <button type="button" class="load-more-cta">Load More Results</button>
  </div>
</template>
<script>
import Filters from "./filters.vue";
import CardBestseller from "./card-bestseller";
import CardProduct from "./card-product";

export default {
  components: {
    Filters,
    CardBestseller,
    CardProduct
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-wrapper {
  padding: 30px;
}
.best-seller-block {
  display: flex;
  justify-content: space-between;
}
.product-cards {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.load-more-cta {
  display: block;
  width: 100%;
  font-weight: bold;
  text-align: center;
  height: 40px;
  border: 1px solid #000;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 10px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .main-wrapper {
    padding: 10px;
  }
  .best-seller-block {
    overflow-x: auto;
    margin-bottom: 10px;
  }
}
</style>
