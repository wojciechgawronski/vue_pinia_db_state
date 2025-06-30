import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            isFave: false,
            description: 'Description for Task 1',
            completed: false
        },
        {
            id: 2,
            title: 'Task 2',
            isFave: false,
            description: 'Description for Task 2',
            completed: true
        },
        {
            id: 3,
            title: 'Task 3',
            isFave: true,
            description: 'Description for Task 3',
            completed: false
        }
    ],
    name: 'woj gaw',
  }),
  getters: {
    favs: (state) => {
      return state.tasks.filter(task => task.isFave)
    },
    favCount: (state) => {
      return state.tasks.filter(task => task.isFave).length
    },
    totalCount: (state) => {
      return state.tasks.length;
    }
  }
});