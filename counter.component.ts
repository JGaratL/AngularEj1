import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  time: number = 0;
  message: boolean = false;

  addCounter() {
    this.time = this.time +1;
    this.message = false;

  }
  subCounter() {
    if (this.time > 0) {
    this.time = this.time -1;
    this.message = false;

    }
    else {
      this.message = true;
      // alert("No puedes restar a cero");
    }
  }
  resetCounter() {
    this.time = 0;
    this.message = false;
  }

}
