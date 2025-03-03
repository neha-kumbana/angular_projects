import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './task/tasks.service';
import { CommonModule } from '@angular/common';
import { UpdateTaskComponent } from "./update-task/update-task.component";
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CommonModule, UpdateTaskComponent, MatDatepickerModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name?:string
  isAddingTask = false
  isEditTask = false
  task: any
  isCompletedTask = false
  isPendingTask = false
  completedTask: any
  selectedDate: any
  selectedDateFlag: boolean = false
  
  constructor(private tasksService: TasksService){
    
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  completedTasks(userId: any) {
    this.completedTask = this.tasksService.getCompletedTask(userId)
    console.log("completed", this.completedTask);
    
  }

  onClick(event: any){
    console.log("event", event);
    this.isEditTask = true
    this.task = event
  }

  onCompletedTask(){
    // console.log("completed task", this.tasksService.completedTasks);
     this.isCompletedTask = true
     this.isPendingTask = false     
     this.completedTasks(this.userId)
  }

  onClose(){
    console.log("close");
    
  }

  onPendingTask(){
    this.isPendingTask = true
    this.isCompletedTask = false
  }
  // onCompleteTask(id: string){
  //   return this.tasksService.removeTask(id)
  // }

  onCloseTab(){
    this.isEditTask = false
   }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }

  onSelect(event: any){
    this.selectedDate = event
    this.isPendingTask = false
    this.isCompletedTask = false
    this.selectedDateFlag = true
    console.log("completed", this.completedTask);

    
  }

  get completedDateTasks(){
    return this.tasksService.getTaskByDate(this.userId, this.selectedDate)
  }
  
}
