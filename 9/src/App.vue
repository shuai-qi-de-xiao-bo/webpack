<template>
    <div class="name">hello {{name}}</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'jianguo'
        }
    }
}
</script>

<style lang="less" scoped>
    .name {
        color: pink;
        font-size: 24px;
    }
</style>