<template>
    <div class="task-details">
          <h3>{{ task.title }}</h3>
          <p style="margin-bottom: 0px">{{ task.description }}</p>
          <p>Fav: {{ task.isFave }}</p>
          <button @click="deleteTask">del</button>
          <button @click="toggleFav">{{ task.isFave ? '-' : '+' }} fav</button>
    </div>
</template>

<script setup lang="ts">
    import { useTaskStore } from '@/stores/TaskStore';
    import type { Task } from '@/stores/TaskStore';

const props = defineProps<{
  task: Task;
}>();
  
  const taskStore = useTaskStore();

  const deleteTask = () => {
    taskStore.deleteTask(props.task.id)
  }

  const toggleFav = () => {
    taskStore.toggleFav(props.task.id)
  }



</script>

<style scoped>
.task-details {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
p {
  margin: 5px 0;
}

</style>