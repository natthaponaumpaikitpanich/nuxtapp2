<template>
<div class="item">
<span>{{ item.name }} x {{ item.qty }}</span>
<span>{{ item.price * item.qty }} บาท</span>
<button @click="$emit('remove', item.id)">ลบ</button>
</div>
</template>


<script>
export default {
props: { item: Object }
}
</script>


<style scoped>
.item {
display: flex;
justify-content: space-between;
margin-bottom: 10px;
}
button {
background: crimson;
color: white;
border: none;
border-radius: 4px;
}
</style>