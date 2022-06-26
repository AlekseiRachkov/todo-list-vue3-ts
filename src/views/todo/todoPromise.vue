<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/store/useTodoList";
import todoPromiseItem from "./todoPromiseItem.vue";

const store = useTodoListStore();
const { promiseList } = storeToRefs(store);
</script>

<template>
  <div class="columns">
    <div class="column">
      <ol>
        <li v-for="i of promiseList" :key="i.id">
          <todoPromiseItem :item="i" />
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.has-text-danger, .has-text-success, .has-text-warning {
  @include tooltipCustom();
}
</style>