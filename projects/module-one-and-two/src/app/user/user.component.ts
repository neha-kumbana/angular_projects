import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User
  @Input ({required: true}) selected!:boolean
  // @Input({required:true}) id!:string
  // @Input({required:true}) avatar!:string 
  // @Input({required:true}) name!:string
  @Output() select = new EventEmitter()
  // avatar = input.required<string>()
  // name = input.required<string>()
  // select = output<string>()
  // selectedUser = signal(DUMMY_USERS[randomIndex]) 
  // imagePath = computed(() => '/../../assets/users/' + this.avatar())
  
  get imagePath(){
    return '/../../assets/users/'+ this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user)
  }
}
