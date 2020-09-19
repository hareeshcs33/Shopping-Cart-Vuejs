<template>
  <div id="app">
    <navigation></navigation>
    <sidenav></sidenav>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import Sidenav from "./components/sidenav";

export default {
  name: "App",
  components: {
    Navigation,
    Sidenav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
body {
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
}

*,
:after,
:before {
  box-sizing: border-box;
}

body {
  background-color: #e2e2e2;
  font-size: 13px;
}
</style>
