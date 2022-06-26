<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/store/useTodoList";

const description = ref('');
const inputFocus = ref();
const store = useTodoListStore();
const { addItem }  = store;

function add() {
  addItem({description: description.value});
  description.value = '';
}

onMounted(() => {
  inputFocus.value.focus();

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && description.value && inputFocus.value == document.activeElement) {
      add();
    }
  });
});
</script>

<template>
  <div class="columns">
    <div class="column is-8">
      <input class="input" type="text" placeholder="Введите задачу" ref="inputFocus" v-model="description">
    </div>
    <div class="column is-4 has-text-centered">
      <button class="button is-primary" @click="add()" :disabled="!description">Добавить</button>
    </div>
  </div>
</template>

<style lang="scss">

</style>