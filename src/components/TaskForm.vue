<template>
  <div class="task-form">

    <form @submit.prevent="handleSubmit">
      <div>
        <input 
          type="text"
          placeholder="I need to..."
          v-model="newTask"
        >
      </div>
      <div>
        <label for="isFave">is fave</label>
        <input
          id="isFave"
          type="checkbox"
          v-model="isFave"
         />

      </div>

      <button>Add</button>

    </form>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/stores/TaskStore';
  import { ref } from 'vue';
  
  const newTask = ref('');
  const isFave = ref(false);
  const taskStore = useTaskStore();
  const handleSubmit = () => {
    if (newTask.value.length > 0) {
      taskStore.addTask({
        id: Math.floor(Math.random() * 1000), // Random ID for simplicity
        title: newTask.value,
        isFave: isFave || false,
        description: '',
        completed: false
      });
    }
  }

</script>

<style scoped>
.task-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}
.task-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;  
}
</style>