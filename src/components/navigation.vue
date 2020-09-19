<template>
  <div class="navigation-block">
    <div class="settings-block">
      <i class="fas fa-sliders-h icon"></i>
    </div>
    <div class="search-block">
      <div class="search-box">
        <input type="text" placeholder="Search" />
        <i class="fas fa-search search-icon"></i>
      </div>
    </div>
    <div class="route-block">
      <div class="route-box">
        <router-link to="/account">
          <i class="fas fa-user icon"></i>
          <div class="route-name">Account</div>
        </router-link>
      </div>
      <div class="route-box">
        <router-link to="/orders">
          <i class="fas fa-file-alt icon"></i>
          <div class="route-name">Orders</div>
        </router-link>
      </div>
      <div class="route-box">
        <router-link to="/cart">
          <div class="cart-box">
            <i class="fa fa-shopping-cart icon" aria-hidden="true"></i>
            <span class="cart-count"></span>
          </div>
          <div class="route-name">Cart</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.navigation-block {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
}
.route-block {
  display: flex;
}
.route-block .route-box {
  color: #a3a3a3;
  width: 65px;
}
.route-box a {
  color: #a3a3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.route-box a .icon {
  font-size: 26px;
}
.route-box .route-name {
  font-size: 13px;
  margin-top: 5px;
}
.search-block {
  max-width: 400px;
  width: 100%;
  margin: 0 10px;
}
.search-box {
  position: relative;
}
.search-box input {
  width: 100%;
  height: 36px;
  border: 1px solid #e2e2e2;
  border-radius: 21px;
  padding: 10px 40px 10px 10px;
}
.search-box .search-icon {
  background-color: orange;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 1;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  padding: 8px;
}
.settings-block .icon {
  color: #a3a3a3;
  font-size: 24px;
}
.cart-box {
  position: relative;
}
.cart-count {
  background-color: orange;
  position: absolute;
  top: -4px;
  right: -4px;
  display: block;
  min-width: 10px;
  min-height: 10px;
  border-radius: 100%;
}
@media (max-width: 767px) {
  .navigation-block {
    padding: 15px;
  }
  .search-block {
    max-width: 250px;
  }
  .route-block .route-box {
    width: 40px;
  }
  .route-box .route-name {
    display: none;
  }
  .settings-block .icon,
  .route-box a .icon {
    font-size: 20px;
  }
}
@media (max-width: 580px) {
  .search-block input {
    visibility: hidden;
  }
  .route-block {
    font-size: 13px;
  }
  .route-box {
    width: 55px;
  }
}
</style>
