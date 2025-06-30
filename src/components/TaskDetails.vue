<template>
    <div class="task-details">
          <h3>{{ task.title }}</h3>
          <p style="margin-bottom: 0px">{{ task.description }}</p>
          <p>Fav: {{ task.isFave }}</p>
          <button>del</button>
          <button>fav</button>
    </div>
</template>

<script setup lang="ts">
  defineProps({
    task: Object,
  });



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