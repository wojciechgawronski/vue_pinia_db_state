<template>
  <site-header @updateFilter="filter = $event"/>

  <div>
      <div class="task-list">
        <div>
          <h2>All tasks: </h2>
          <p>Favs: {{ taskStore.favCount }}, total: {{ taskStore.totalCount }}</p>
          <task-form />
        </div>
        <div>
          <div v-if="taskStore.isLoading">
            <p>Loading tasks...</p>
            <p><strong>Is server running?</strong></p>
          </div>
          <div v-if="filter === 'all'">
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
  </div>
</template>

<script setup lang="ts">
  import SiteHeader from './components/SiteHeader.vue';
  import { useTaskStore } from './stores/TaskStore';
  import TaskForm from './components/TaskForm.vue';
  import TaskDetails from './components/TaskDetails.vue';
  import { ref, computed } from 'vue';
  // import { RouterLink, RouterView } from 'vue-router'
  const taskStore = useTaskStore();

  taskStore.getTasks();

  const filter = ref('all');
  const filteredTasks = computed(() => {
    if (filter.value === 'favs') {
      return taskStore.favs;
    }
    return taskStore.tasks;
  })

</script>

<style scoped>

.task-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>