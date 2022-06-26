<script lang="ts" setup>
import todoForm from "./todoForm.vue";
import router from "@/router/index";

router.push({name: 'todoPromise'})

</script>

<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h2 class="title is-2 mb-4 has-text-centered">
          Ежедневник
        </h2>
        <todoForm />
        
        <div class="has-text-centered mb-4">
          <router-link :to="{name: 'todoPromise'}" class="mr-4 tag is-white" exact-active-class="is-primary" >Задачи в ожидании</router-link>
          <router-link :to="{name: 'todoCompleted'}" class="tag is-white" exact-active-class="is-primary" >Завершенные задачи</router-link>
        </div>
        
        <router-view /> 
      </div>
    </div>    
  </div>  
</template>

<style lang="scss" scoped>

</style>