import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor() {
    setTheme('bs4');
  }
}
