import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  image: string = 'https://randomuser.me/api/portraits/lego/2.jpg'
  name: string = "Doe";
  surname: string = "John";
  age: number = 25;
  text: string = "two beer or not to beer"; 

  //isChangeAge: boolean = false;
  constructor() {
  }

isChangeAge: boolean = true;

changeTexte(): void {
this.isChangeAge = false;
}
};