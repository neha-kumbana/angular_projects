import { Injectable } from "@angular/core"
import { NewTaskData } from "./task.model"
import { Task } from "./task.model"
import moment from "moment"

@Injectable({providedIn: 'root'})
export class TasksService {
private tasks = [
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
        checked: false
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2025-05-31',
        checked: false
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
        'Prepare and describe an issue template which will help with project management',
        dueDate: '2025-06-15',
        checked: false
    }
    ]
    completedTasks: any
    constructor(){
        const tasks = localStorage.getItem('tasks')
        
        if(tasks){
            this.tasks = JSON.parse(tasks)
            this.completedTasks = this.tasks.filter((tasks) => tasks.checked == true)
            console.log("com", this.completedTasks);
            
        }
    }
    
    getCompletedTask(userId: string){
        return this.completedTasks.filter((task: any) => task.userId == userId)
        
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId == userId)
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            checked: taskData.checked
          })
          this.saveTasks()
    }

    updateCheck(id: string){
        this.tasks = this.tasks.map(task => task.id === id ? {...task, checked: true} : task)
        this.saveTasks()
    }

    updateTask(task: Task, id: string){
        const index = this.tasks.findIndex(task => task.id == id)
        if(index !== -1){
            this.tasks[index] = {...this.tasks[index], ...task}
        }
        this.saveTasks()
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks()
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.completedTasks = this.tasks.filter((tasks) => tasks.checked == true)
    }

    getTaskByDate(userId: any, date: any){
        console.log("tasksss", date);
        date = moment(date).format('YYYY-MM-DD')
        const dateStr = date.toLocaleString() 
        const userTask = this.tasks.filter((task: any) => task.userId == userId)
        return userTask.filter((task : any) => task.dueDate == dateStr)
    }
}