import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string
  @Output() close = new EventEmitter()
  @Output() add = new EventEmitter<NewTaskData>()
  // enteredTitle = signal('')
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  checked = false
  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
      checked: this.checked
    }, this.userId)
    this.close.emit()
  }
}
