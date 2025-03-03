import { NgModule } from "@angular/core";
import { TasksComponent } from "../tasks/tasks.component"
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    imports: [FormsModule, CommonModule, SharedModule],
    exports: [TasksComponent, TaskComponent, NewTaskComponent, FormsModule]
})

export class TasksModule {}
