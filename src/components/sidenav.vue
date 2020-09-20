<template>
    <div class="sidenav">
        <h1 class="title">Sidenav</h1>
        <ul>
            <li class="sidenav-link">filter one</li>
            <li class="sidenav-link">filter two</li>
            <li class="sidenav-link">filter three</li>
        </ul>
        <div class="close-icon" @click="closeSidenav">
            <i class="fas fa-times icon"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        closeSidenav(){
            const SIDENAV = document.querySelector(".sidenav");
            SIDENAV.style.marginLeft = "-300px";
        }
    }
}
</script>
<style scoped>
.title {
    text-align: center;
    margin: 10px 0 30px;
}
.sidenav {
    color: #000;
    background: gray;
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    transition: 2s;
    margin: 85px 0 0 -300px;
    z-index: 99;
}
.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
}
.sidenav-link {
    color: #fff;
    background-color: rgb(128, 26, 201);
    font-size: 16px;
    margin-bottom: 10px;
    padding: 10px 15px;
}
.sidenav-link:hover {
    background-color: rgb(54, 11, 85);
    transition: 1s;
    cursor: pointer;
}
</style>