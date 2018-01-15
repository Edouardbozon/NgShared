import { Component } from '@angular/core';
import { TogglableListComponent } from './togglable-list-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'app-list-component',
  templateUrl: './app-list.component.html',
})
export class AppListComponent extends TogglableListComponent {
}
