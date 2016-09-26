import { Component } from '@angular/core';

declare var foundation: any;
import '/node_modules/foundation-sites/dist/foundation.js';


@Component({
  moduleId: module.id,
  styleUrls: ['views/css/base.css'],
  selector: 'my-app',
  templateUrl: 'views/base.html'

})


export class AppComponent {
  ngOnInit() {
   //$(document).foundation();
  }
}
