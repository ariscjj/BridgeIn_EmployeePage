import {
  collection, addDoc,
  query, getDocs,
  doc, updateDoc,
  deleteDoc
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Task } from '../models/task';

class TaskService {

  constructor() {
    this.collection = 'tasks';
  }

  async createTask(task) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      photo: task.photo,
      name: task.name,
      country: task.country,
      role: task.role,
      email: task.email,
      phone: task.phone,
      status: task.status
    });

    task.id = docRef.id;

    return task;
  }

  async fetchTasks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const tasks = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const task = new Task(
        doc.id,
        data.photo,
        data.name,
        data.country,
        data.role,
        data.email,
        data.phone,
        data.status
      );

      tasks.push(task);
    });

    return tasks;
  }

  async updateTask(task) {
    const docRef = doc(db, this.collection, task.id);

    await updateDoc(docRef, {
      photo: task.photo,
      name: task.name,
      country: task.country,
      role: task.role,
      email: task.email,
      phone: task.phone,
      status: task.status
    });

    return task;
  }

  async deleteTask(taskId) {
    const docRef = doc(db, this.collection, taskId);

    await deleteDoc(docRef);
  }
} 

const service = new TaskService();

export default service;



