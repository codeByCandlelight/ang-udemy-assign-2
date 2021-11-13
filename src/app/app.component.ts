import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUsernameFilled = false;
  username = '';

  // onUpdateInputField(event: any) {
  // this.username = (<HTMLInputElement>event.target).value;
  //   this.isUsernameBlank = true;
  //   console.log(event);
  // }

  onClearUsername() {
    this.isUsernameFilled = false;
    this.username = '';
  }
}
