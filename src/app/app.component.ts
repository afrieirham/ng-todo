import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = [
    { id: 1, title: 'Learn Angular 15', completed: false },
    { id: 2, title: 'Build todo app', completed: false },
  ];
}
