import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  users = DUMMY_USERS
  selectedId!:string
  nameValue!:string

  get selectedUser(){
    return DUMMY_USERS.find((val) => val.id == this.selectedId)
  }

  onSelectUser(id: string){
    this.selectedId = id
    // this.selectedName = DUMMY_USERS.find((val) => val.id == id)
    // this.nameValue = this.selectedName.name
  }
}
