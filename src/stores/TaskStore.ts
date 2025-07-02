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
    tasks: [] as Task[], // tak, by ts znał typ tablicy
    name: 'woj gaw',
    isLoading: false,
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
    async getTasks(){
      this.isLoading = true;
      // try catch ? 
      
      const res = await fetch('http://localhost:3000/tasks');
      // console.log(res);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      
      this.tasks = data;
      this.isLoading = false;
    },
    async addTask(task: Task){
      this.tasks.push(task);

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if (!res.ok) throw new Error('Network response was not ok');
    },

    async deleteTask(id: number){
      this.tasks = this.tasks.filter(task => task.id !== id);

      const res = await fetch('http://localhost:3000/tasks/'+id, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Network response was not ok');

    },
    async toggleFav(id: number){
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.isFave = !task.isFave;
      }

      const res = await fetch('http://localhost:3000/tasks/'+id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isFave: task?.isFave })
      });
    }
  }
});