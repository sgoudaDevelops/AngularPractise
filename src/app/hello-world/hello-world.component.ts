import { Component, OnInit } from '@angular/core';
import { NumberPrintServiceService } from '../number-print-service.service';
import { OptionalservService } from '../optionalserv.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
//  template: `
//     <button (click)="printNumbers()">Print Numbers</button>
//   `
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  
  king:String[]=[];

  car:{name:string,year:number}={
  name:'TOYOTA',
  year:2023
 }
 bus={
  name:'large',
  color:'green'
 }
 

  constructor(  private opt:OptionalservService) { }
   tables:number[]=[]
   customtables:number[]=[]
  ngOnInit(): void {
  }

    printtable(){
  this.tables=this.opt.printnumbers(3);
    }
  // printNumbers() {
  //   this.printNumbers
  // }
  handleButtonClick(id:string){
   this.customtables= this.opt.printnumbers(id);
  
  }

}
