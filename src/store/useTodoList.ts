import { defineStore } from "pinia";
import { todoItem } from "@/interfaces/todo.interface";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    list: [] as todoItem[],
    id: 0,
  }),
  getters: {
    promiseList: (state) => {
      return state.list.filter(i => !i.completed)
    },
    completedList: (state) => {
      return state.list.filter(i => i.completed)
    }
  },
  actions: {
    addItem({ description }: {description: string}): void {
      this.list.unshift({ id: this.id++, completed: false, description })
    },
    completedItem({ id }: { id: number}): void {
      this.list.forEach(i => {
        if (i.id == id) {
          i.completed = !i.completed;
        }
      })
    },
    deleteItem({ id }: { id: number}): void {
      this.list = this.list.filter(i => i.id != id)
    },
    updateItem({ id, description }: {id: number, description: string}): void {
      this.list.forEach(i => {
        if (i.id == id) {
          i.description = description;
        }
      })
    }
  }
})

