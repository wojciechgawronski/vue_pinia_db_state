<template>
  <header>
    <div class="text-center">
      <h1>Pinia tasks</h1>
      <p>Hello, {{ taskStore.name }}</p>
      <img src="@/assets/logo_vue.svg" alt="" style="height: 40px; width: 40px;">
      <img src="@/assets/logo_pinia.svg" alt="" style="height: 40px; width: 40px;">
      <button @click="filter = 'all'">all</button>
      <button @click="filter = 'favs'">favs</button>
    </div>
  </header>
  <div>
      <div class="task-list">
        <div v-if="filter === 'all'">
          <h2>All tasks: </h2>
          <p>Favs: {{ taskStore.favCount }}, total: {{ taskStore.totalCount }}</p>
          <div v-for="task in taskStore.tasks" :key="task.id">
            <task-details :task="task" />
          </div>
        </div>
        <div v-if="filter === 'favs'">
          Facvourite tasks:
          <div v-for="task in taskStore.favs" :key="task.id">
            <task-details :task="task" />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetails from './components/TaskDetails.vue';
  import { ref } from 'vue';
  // import { RouterLink, RouterView } from 'vue-router'
  const taskStore = useTaskStore();
  const filter = ref('all');


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
img {
  margin: 0 10px;
  vertical-align: middle;
}
.task-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>