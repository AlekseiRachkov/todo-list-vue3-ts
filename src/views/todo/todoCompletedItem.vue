<script lang="ts" setup>
import { useTodoListStore } from "@/store/useTodoList";
import { todoItem } from "@/interfaces/todo.interface";

interface Props {
  item: todoItem;
}

const { item } = defineProps<Props>();

const store = useTodoListStore();
const { completedItem }  = store;

function ComponentCompletedItem({ id }: {id: number}) {
  completedItem({ id });
}
</script>

<template>
  <div class="is-flex is-justify-content-space-between">
      <div class="text-decoration" >{{item.description}}</div>
      <div> 
        <span class="icon has-text-success" data-description="Восстановить задачу" @click="ComponentCompletedItem(item)">
          <i class="fas fa-lg fa-delete-left" />
        </span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.has-text-success {
  @include tooltipCustom();
}

.text-decoration {
  text-decoration: line-through;
}
</style>