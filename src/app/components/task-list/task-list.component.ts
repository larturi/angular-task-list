import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskListNoCompleted: any[] = [];
  public taskListCompleted: any[] = [];
  public showInputTask: boolean = false;
  public errorInput: boolean = false;
  public showCompleted: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showInputTestTask() {
      this.showInputTask = true;
  }

  addTask(description: string) {

      if (description.length === 0) {
         this.errorInput = true;
      } else {
        const task: Task = {
          date: new Date(),
          description,
          completed: false
        };

        this.taskListNoCompleted.push(task);
        this.errorInput = false;
        this.showInputTask = false;
      }

  }

  removeTask($event) {
     this.taskListNoCompleted.splice($event, 1);
  }

  completeTask($event) {
    const task = this.taskListNoCompleted[$event];
    task.completed = true;
    task.date = new Date();
    this.taskListNoCompleted.splice($event, 1);
    this.taskListCompleted.push(task);

  }

  showTaskCompleted() {
    this.showCompleted = !this.showCompleted;
  }
}
