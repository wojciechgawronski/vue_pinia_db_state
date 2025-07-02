<template>
  <header>
    <div class="text-center">
      <h1>Pinia tasks</h1>
      <p>Hello, {{ taskStore.name }}</p>
      <img src="@/assets/logo_vue.svg" alt="" style="height: 40px; width: 40px;">
      <img src="@/assets/logo_pinia.svg" alt="" style="height: 40px; width: 40px;">
      <!-- <button @click="filter = 'all'">all</button> -->
      <!-- <button @click="filter = 'favs'">favs</button> -->
      <button @click="$emit('updateFilter', 'all')">all</button>
      <button @click="$emit('updateFilter', 'favs')">favs</button>
      <button @click="taskStore.$reset">reset state</button>
      <button @click="fetchTasks">fetch data from server</button>
    </div>
  </header>

</template>

<script setup>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/TaskStore';
  import { storeToRefs } from 'pinia';
  
  defineEmits(['updateFilter']);
  
  const taskStore = useTaskStore();
  const filter = ref('all');

  const fetchTasks = async () => {
    try {
      await taskStore.getTasks();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  
</script>

<style scoped>
.text-center {
  text-align: center;
}
header {
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
h1 {
  margin: 0;
  color: #343a40;
}
img, button {
  margin: 0 10px;
  vertical-align: middle;
}
</style>