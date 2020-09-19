<template>
    <div class="sidenav">
        <h3>Sidenav</h3>
        <ul>
            <li>sidenav</li>
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
.sidenav {
    color: #000;
    background: gray;
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    transition: 2s;
    margin: 85px -300px 0 0;
}
.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
}
</style>