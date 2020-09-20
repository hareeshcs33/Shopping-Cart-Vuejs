<template>
    <div class="products">
        <ul>
            <li>
                <div class="product-box"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listData: [],
        }
    },
    methods: {
        
    },
    computed: {

    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                // console.log(item);
                this.listData.push(item);
            });
        });
        
        console.log(this.listData);
    }
}




// const div = document.createElement('div');
// const productBox = document.querySelector('.product-box');
// div.appendChild(productBox);
// productBox.innerHTML  = `<div>
//         <div>${data.userId}</div>
//         <div>${data.id}</div>
//         <div>${data.title}</div>
//         <div>${data.body}</div>
//     </div>
//     `;
</script>
<style scoped>
.products {
    padding: 30px;
}
</style>