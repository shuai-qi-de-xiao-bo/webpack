<template>
    <div>
        <button @click="changeName('index')">index</button>
        <button @click="changeName('about')">about</button>
        <component :is="name"></component>
        <jianguo></jianguo>
    </div>
</template>

<script>
import jianguo from 'Jianguo';
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        jianguo,
        index: defineAsyncComponent(() => import('@/components/Index')),
        about: defineAsyncComponent(() => import('@/components/About')),
    },

    data() {
        return {
            name: 'index'
        }
    },

    methods: {
        changeName(val) {
            this.name = val;
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