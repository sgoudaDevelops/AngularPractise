import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionalservService {

  constructor() { }
  printnumbers(num:any):number[]{
    console.log(num*1);
     return [num*1,num*2,num*3,num*4,num*5,num*5,num*6,num*7,num*8,num*9,num*10];
  }

}
