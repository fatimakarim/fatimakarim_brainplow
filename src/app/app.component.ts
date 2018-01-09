import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj={
    id:"1",
    name:"fatima"
  }
  arr=["aa","bb","cc"];
 isTrue = false;
 myName = "fatima"
}
