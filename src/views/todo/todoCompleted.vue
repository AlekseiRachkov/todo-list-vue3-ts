<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/store/useTodoList";
import todoCompletedItem from "./todoCompletedItem.vue";

const store = useTodoListStore();
const { completedList } = storeToRefs(store);

</script>

<template>
  <div class="columns">
    <div class="column">
      <ol>
        <li v-for="i of completedList" :key="i.id">
          <todoCompletedItem :item="i" />
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>