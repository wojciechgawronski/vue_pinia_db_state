import { defineStore } from 'pinia';

export interface Task { // dodano export interfejsu tak 
  id: number;
  title: string;
  isFave: boolean;
  description: string;
  completed: boolean;
}

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
    ] as Task[], // tak, by ts znał typ tablicy
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
  },
  actions: {
    addTask(task: Task){
      this.tasks.push(task)
    },
    deleteTask(id: number){
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    toggleFav(id: number){
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.isFave = !task.isFave;
      }
    }
  }
});