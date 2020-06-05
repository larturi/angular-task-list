import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() index;

  @Output() remove = new EventEmitter();
  @Output() completed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  taskCheckedEvent() {
     this.completed.emit(this.index);
  }

  taskRemoveEvent() {
    this.remove.emit(this.index);
  }

}
