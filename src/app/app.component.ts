import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Items = ["Angular 4", "react" , "underscore"];
  newItems = "" ;
  pushItem = function () {
    if (this.newItems != "") {
      this.Items.push(this.newItems);
      this.newItems= "";
    }

  }
}
