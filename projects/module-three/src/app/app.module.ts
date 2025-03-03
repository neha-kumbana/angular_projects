import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent,
        ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TasksModule, DatePipe]
})

export class AppModule {}