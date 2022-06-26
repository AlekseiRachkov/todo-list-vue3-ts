<script lang="ts" setup>
import { ref } from 'vue';
import _layout from "@/layouts/_layout.vue";

const layout = _layout;

</script>

<template>  
  <component :is="layout" >
    <router-view />
  </component>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
