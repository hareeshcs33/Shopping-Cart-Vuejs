<template>
    <div class="products">
        <div class="product-box"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods: {},
    computed: {},
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const productBox = document.querySelector('.product-box');
                productBox.innerHTML  += `<div class="cards">
                        <div>${item.userId}</div>
                        <div>${item.id}</div>
                        <div>${item.title}</div>
                        <div>${item.body}</div>
                    </div>
                    `;
            });
        });
    }
}
</script>
<style scoped>
.products {
    padding: 30px;
}
.product-box {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.product-box > div {
    background-color: #fff;
    width: 48%;
    margin: 0 5px 20px;
    padding: 20px;
}
</style>