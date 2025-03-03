import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model'
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule, DatePipe } from '@angular/common';
import { TasksService } from './tasks.service';
import { SharedModule } from '../../shared.module';
import { UpdateTaskComponent } from "../update-task/update-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, SharedModule, UpdateTaskComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({required:true}) task!: Task
 @Output() click = new EventEmitter()
 @Output() statusChange = new EventEmitter()
 private tasksService = inject(TasksService)
 isEditTask!: boolean
 @Input() isDisabled = false

 onCompleted(){
  this.tasksService.removeTask(this.task.id)
 }

 onCloseTab(){
  this.isEditTask = false
 }

 onClose(){
  
 }

 oncheck(event: any, task: any){
  console.log("task", task);
  
  if(event.checked == true){
    console.log("Onchecked");
    this.tasksService.updateCheck(task.id)
    
  }
 }

 onClick(){
  // if(this.task.checked == false){
  //   this.isEditTask = true

  // }
  this.click.emit(this.task)
  
 }
}
