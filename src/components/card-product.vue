<template>
  <div class="product-card card">
    <div class="card-title wrap-1">
      Continental <br />
      PremiumContact<sup>TM</sup> 6
    </div>
    <div class="wrap-box wrap-2">
      <div class="appr-tag">
        <img src="../assets/tag.png" alt="APPR Tag" />
      </div>
    </div>
    <div class="wrap-box wrap-3">
      <div class="label">205/55 R16 H</div>
      <div class="label">SUV</div>
    </div>
    <div class="wrap-box wrap-4">
      <div class="label" :class="isStock === 'inStock' ? 'in-stock-label' : ''">
        Stock <i class="fas" :class="stockAvailable"></i>
        <div class="no-stock" v-if="isStock === 'noStock'">Back in 1 week!</div>
        <div class="alert-stock" v-if="isStock === 'alertStock'">
          8 Tires Left
        </div>
      </div>
    </div>
    <div class="wrap-box wrap-5">
      <div class="label">Price <span>$340</span></div>
    </div>
    <div class="wrap-box wrap-6">
      <div class="add-cart-count">
        <div class="box"><i class="fas fa-minus"></i></div>
        <div class="box">4</div>
        <div class="box"><i class="fas fa-plus"></i></div>
      </div>
    </div>
    <div class="wrap-box wrap-7">
      <div class="label">
        Total <span class="total-value">$1,360</span
        ><span class="save-value">Save $360</span>
      </div>
    </div>
    <div class="wrap-box wrap-8">
      <div class="add-count-cta">
        <button type="button" class="add-cart-cta" v-if="isStock !== 'noStock'">
          <i class="fas fa-cart-plus cart-plus"></i>
          <span class="add-cta-text">Add to Cart</span>
        </button>
        <button
          type="button"
          class="add-cart-cta notify-cta"
          v-if="isStock === 'noStock'"
        >
          <i class="fas fa-bell cart-plus"></i>
          Notify Me!
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isStock"],
  computed: {
    stockAvailable: function() {
      return this.isStock === "inStock"
        ? "check-icon fa-check"
        : this.isStock === "alertStock"
        ? "alert-icon fa-exclamation"
        : "into-icon fa-times";
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
.product-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}
.card-title {
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 10px;
}
.add-cart-count {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 102px;
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
  justify-content: center;
  min-width: 75px;
  border: 0;
  border-radius: 18px;
  padding: 6px 15px;
  cursor: pointer;
}
.add-count-cta .add-cart-cta.notify-cta {
  color: #000;
  background-color: #fff;
  border: 1px solid orange;
}
.add-count-cta .cart-plus {
  font-size: 20px;
  margin-right: 5px;
}
.wrap-box .label {
  margin-bottom: 5px;
}
.total-value {
  font-size: 15px;
  font-weight: bold;
  margin-left: 2px;
}
.appr-tag {
  max-width: 60px;
}
.appr-tag img {
  width: 100%;
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
.save-value {
  color: #d93551;
  display: none;
  margin-top: 5px;
}
.alert-stock {
  color: #000;
}
.no-stock {
  color: #d93551;
}
.no-stock,
.alert-stock {
  font-size: 12px;
  font-weight: bold;
  margin: 5px 5px 0 0;
}
@media (max-width: 992px) {
  .product-card {
    width: 49%;
    flex-flow: row wrap;
  }
  .wrap-1 {
    width: 50%;
    order: 1;
    margin-bottom: 5px;
  }
  .wrap-2 {
    width: 24%;
    order: 3;
    margin-bottom: 5px;
    padding-right: 5px;
  }
  .wrap-3 {
    width: 50%;
    order: 2;
    padding-left: 4px;
  }
  .wrap-4 {
    width: 26%;
    order: 4;
  }
  .wrap-5 {
    width: 22%;
    order: 5;
    padding-left: 4px;
  }
  .wrap-4 .label.in-stock-label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .wrap-4 .label.in-stock-label .check-icon {
    margin-left: 10px;
  }
  .wrap-5 .label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .wrap-4 .label .check-icon,
  .wrap-5 .label span {
    margin-top: 5px;
  }
  .wrap-4 .label .alert-icon,
  .wrap-4 .label .into-icon {
    margin-left: 3px;
  }
  .save-value {
    display: block;
  }
  .wrap-6 {
    width: 50%;
    order: 7;
  }
  .wrap-7 {
    width: 28%;
    order: 6;
  }
  .wrap-7 .label {
    white-space: nowrap;
  }
  .wrap-8 {
    width: 50%;
    order: 8;
    padding-left: 4px;
  }
}
@media (max-width: 767px) {
  .product-card {
    width: 100%;
  }
  .add-cta-text {
    display: flex;
  }
}
</style>
