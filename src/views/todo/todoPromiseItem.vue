<script lang="ts" setup>
import { useTodoListStore } from "@/store/useTodoList";
import { reactive, onMounted, ref, nextTick } from "vue";
import { todoItem, PagePromiseItem } from "@/interfaces/todo.interface";

interface Props {
  item: todoItem;
}

const { item } = defineProps<Props>();

const inputFocus = ref<HTMLInputElement | null>(null);

const page: PagePromiseItem = reactive({
  description: '',
  edit: false,
});

const store = useTodoListStore();
const { completedItem, deleteItem, updateItem }  = store;

function ComponentDeleteItem({ id }: {id: number}) {
  deleteItem({ id });
}

function ComponentUpdateItem({ id }: {id: number}) {
  updateItem({ id, description: page.description });
  page.description = "";
  page.edit = false;
}

function ComponentCompletedItem({ id }: {id: number}) {
  completedItem({ id });
}

function onFocus({description}: {description:string}) {
  page.description = item.description;
  page.edit = true;
  nextTick(() => {
    inputFocus.value.focus();
  })
}

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && page.description && inputFocus.value == document.activeElement) {
      ComponentUpdateItem(item);
    }

    if (event.key == 'Escape' && page.description && inputFocus.value == document.activeElement) {
      page.edit = false;
    }
  });
});
</script>

<template>
  <div class="is-flex is-justify-content-space-between">
      <div v-show="!page.edit">{{item.description}}</div>
      <div v-show="page.edit" class="block-input">
        <div class="is-flex is-align-items-center">
          <input class="input is-small mr-2" type="text" placeholder="Редактирование" v-model="page.description" ref="inputFocus">
          <span class="icon mr-2">
            <i class="fas fa-lg fa-close" @click="page.edit = false" />
          </span>
          <span class="icon" v-if="page.description">
            <i class="fas fa-lg fa-check" @click="ComponentUpdateItem(item)" />
          </span>
        </div>
      </div>
      <div> 
        <span class="icon has-text-success mr-2" data-description="Задача выполнена" @click="ComponentCompletedItem(item)">
          <i class="fas fa-lg fa-check-square " />
        </span>
        <span class="icon has-text-warning mr-2" data-description="Редактировать задачу" @click="onFocus(item)">
          <i class="fas fa-lg fa-edit" />
        </span>
        <span class="icon has-text-danger" data-description="Удалить задачу" @click="ComponentDeleteItem(item)">
          <i class="fas fa-lg fa-delete-left" />
        </span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.has-text-danger, .has-text-success, .has-text-warning {
  @include tooltipCustom();
}

.fa-close, .fa-check {
  cursor: pointer;
}

</style>