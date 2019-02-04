import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  digit: number = 10;

  constructor() {

    setInterval(() => {
      let ct = new Date();
      this.dateMessage = ct.toDateString() + ' ' + ct.toLocaleTimeString();
    }, 1000);

  }

  ngOnInit() {
  }

  addTwoDigit(a: number, b: number) {
    return a + b;
  }

}
