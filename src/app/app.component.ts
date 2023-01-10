import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = new FormControl('');
  tasks = [
    {
      id: '1',
      title: 'Learn Angular 15',
      completed: false,
    },
    {
      id: '2',
      title: 'Build todo app',
      completed: false,
    },
  ];

  onSubmit() {
    if (!this.task.value) {
      return;
    }

    this.tasks.push({
      id: String(this.task.value),
      title: this.task.value,
      completed: false,
    });

    this.task = new FormControl('');
  }

  onToggle(id: string) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
}
