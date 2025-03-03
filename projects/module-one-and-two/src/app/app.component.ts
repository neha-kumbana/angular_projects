import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from './shared.module';
import { TasksService } from './tasks/task/tasks.service';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, MatTableModule, SharedModule, MatDatepickerModule, MatCardModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  users = DUMMY_USERS
  selectedId!:string
  selectedName!: string
  selectedDate: any
  nameValue!:string
  completedTask: any
  completeTaskflag: boolean = false
  selected = model<Date | null>(null);

   constructor(private taskService: TasksService){
   }

   ngOnInit(){
    var arr=[1,1,0,1,1,0,0,1,1,0,1]
    var ele = arr[0]
    for(let i=1; i<arr.length; i++){
      if(arr[i] != ele){
        var count = i
        for(let j=count; j<arr.length; j++){
          if(arr[j] == arr[j+1]){
            count = j
          }else{
            if(arr[j+1]<=arr.length){
              var temp = arr[j+1]
              arr[j+1] = arr[i]
              arr[i] = temp
              break
            }else{
              break
            }
          }
        }
      }
    }
    console.log("arr", arr);
    
   }
   
   
  
  get selectedUser(){
    return DUMMY_USERS.find((val) => val.id == this.selectedId)
  }

  onSelectUser(user: any){
    this.selectedId = user.id
    this.selectedName = user.name
    // this.selectedName = DUMMY_USERS.find((val) => val.id == id)
    // this.nameValue = this.selectedName.name
  }

  onAddUer(){
    console.log("add user");
    
  }

  onSelect(event: any){
    this.selectedDate = event
    console.log("selected", this.selectedId, this.selectedName);
    this.completedTask = this.taskService.getTaskByDate(this.selectedId, this.selectedDate)
    console.log("completed", this.completedTask);
    this.completeTaskflag = true
  }
}
