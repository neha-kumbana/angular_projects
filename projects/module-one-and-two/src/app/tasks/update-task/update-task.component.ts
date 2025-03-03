import { Component, EventEmitter, inject, Input, Output, SimpleChange } from '@angular/core';
import { Task } from '../task/task.model';
import { TasksService } from '../task/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  @Input() task!: Task
  @Output() close = new EventEmitter()
  tasksService = inject(TasksService)

  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  id = ''

  ngOnChanges(changes: SimpleChange){
    this.enteredTitle = this.task.title
    this.enteredSummary = this.task.summary
    this.enteredDate = this.task.dueDate
    this.id = this.task.id
  }

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.updateTask({
      id: this.task.id,
      userId: this.task.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      checked: false
    }, this.id)
    this.close.emit()
  }

}
