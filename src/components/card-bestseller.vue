<template>
  <div class="best-seller-card card">
    <div class="bestseller-label">{{ productBestseller }} Bestseller</div>
    <div class="card-content">
      <div class="img-block">
        <img src="../assets/auto-wheel.png" alt="Auto Express" />
      </div>
      <div class="card-content-block">
        <div class="card-title">Continental - Contiecocontact 5</div>
        <div class="content-wrap">
          <div class="wrap-box appr-tag">
            <img src="../assets/tag.png" alt="APPR Tag" />
          </div>
          <div class="wrap-box">
            <div class="label">205/55 R16 H</div>
            <div class="label">SUV</div>
          </div>
          <div class="wrap-box">
            <div class="label">
              Stock <i class="fas fa-check check-icon"></i>
            </div>
            <div class="label">Price <span>$340</span></div>
          </div>
          <div class="wrap-box">
            <div class="label">Total</div>
            <div class="label total-value">$1,360</div>
          </div>
        </div>
        <div class="add-cart-block">
          <div class="add-cart-count">
            <div class="box"><i class="fas fa-minus"></i></div>
            <div class="box">4</div>
            <div class="box"><i class="fas fa-plus"></i></div>
          </div>
          <div class="add-count-cta">
            <button type="button" class="add-cart-cta">
              <i class="fas fa-cart-plus cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["productType"],
  computed: {
    productBestseller() {
      return this.productType === "Premium" ? "Premium" : "Economy";
    }
  }
};
</script>
<style scoped>
.card {
  background-color: #fff;
  position: relative;
  margin-bottom: 15px;
}
.best-seller-card {
  width: 49%;
  min-width: 300px;
  padding: 20px 15px 15px;
}
.best-seller-card:not(:last-child) {
  margin-right: 10px;
}
.bestseller-label {
  color: #000;
  background-color: orange;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: -10px;
  padding: 3px 10px;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 10px;
}
.card-content {
  display: flex;
  align-items: center;
}
.img-block {
  width: 28%;
  padding-right: 10px;
}
.img-block img {
  width: 90%;
}
.card-content-block {
  width: 72%;
}
.content-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.wrap-box {
  white-space: nowrap;
}
.wrap-box img {
  width: 100%;
}
.wrap-box .label {
  margin-bottom: 5px;
}
.total-value {
  font-size: 15px;
  font-weight: bold;
}
.wrap-box:first-child {
  width: 20%;
}
.wrap-box:nth-child(2) {
  width: 30%;
  padding: 0 5px;
}
.wrap-box:nth-child(3) {
  width: 23.5%;
  padding: 0 5px;
}
.wrap-box:nth-child(4) {
  width: 23.5%;
  padding-left: 5px;
}
.check-icon,
.into-icon,
.alert-icon {
  color: #fff;
  font-size: 12px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  padding: 2px;
}
.check-icon {
  background-color: green;
}
.into-icon {
  background-color: #d93551;
}
.alert-icon {
  background-color: orange;
}
.add-cart-block {
  display: block;
}
.add-cart-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-cart-count {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
}
.add-cart-count .box {
  font-size: 12px;
  font-weight: bold;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-cart-count .box:not(:last-child) {
  border-right: 1px solid #e2e2e2;
}
.add-cart-count .box:first-child,
.add-cart-count .box:last-child {
  cursor: pointer;
}
.add-cart-count .box:nth-child(2) {
  background-color: #e2e2e2;
}
.add-count-cta .add-cart-cta {
  color: #000;
  background-color: orange;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 18px;
  padding: 6px 15px;
  cursor: pointer;
}
.add-count-cta .cart-plus {
  font-size: 20px;
  margin-right: 5px;
}
@media (max-width: 992px) {
  .card {
    padding: 15px 10px 10px;
  }
  .card-title {
    font-size: 15px;
  }
  .content-wrap {
    flex-flow: row wrap;
  }
  .wrap-box:nth-child(2) {
    width: 70%;
    padding: 0 0 0 5px;
  }
  .wrap-box:nth-child(3) {
    display: flex;
    width: 64%;
    padding: 0;
  }
  .wrap-box:nth-child(3) .label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .wrap-box:nth-child(3) .label:last-child {
    flex: 1 1 auto;
  }
  .wrap-box:nth-child(4) {
    width: 36%;
    padding-left: 5px;
  }
  .img-block img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .best-seller-card {
    margin: 10px 0;
  }
  .card-content {
    margin-bottom: 35px;
  }
  .add-cart-block {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px;
  }
}
</style>
