import { Component, OnInit } from '@angular/core';
import { NumberPrintServiceService } from '../number-print-service.service';

@Component({
  selector: 'app-haiworld',
  template: `
    <button (click)="printNumbers()">Print Numbers</button>
    <ul>
    <li *ngFor="let number of numbers">{{ number }}</li>
  </ul>
  `

//   template: `
// <div *ngFor="let number of numbers">{{ number }}</div>`
 // templateUrl: './haiworld.component.html',
 // styleUrls: ['./haiworld.component.css']
 
})
export class HaiworldComponent implements OnInit {
  numbers: number[] = [];
  constructor(private numberPrintService: NumberPrintServiceService) { }

  ngOnInit(): void {
    //this.numbers = this.numberPrintService.getNumbers();
  }
  printNumbers()
  {
    this.numbers = this.numberPrintService.printNumbers();
  }
  

}
