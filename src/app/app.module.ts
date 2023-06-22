import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HaiworldComponent } from './haiworld/haiworld.component';
import { NumberPrintServiceService } from './number-print-service.service';
import { UppercasepipePipe } from './uppercasepipe.pipe';
import { CommonModule } from '@angular/common';
import { OptionalservService } from './optionalserv.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HaiworldComponent,
    UppercasepipePipe
    
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ NumberPrintServiceService,
                 OptionalservService  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
