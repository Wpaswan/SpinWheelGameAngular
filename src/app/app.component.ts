import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
import { MatDialog } from  '@angular/material/dialog';
import { PrizeComponent } from './prize/prize.component';
import { Prize1Component } from './prize1/prize1.component';
import { Prize2Component } from './prize2/prize2.component';
import { Prize3Component } from './prize3/prize3.component';
import { Prize4Component } from './prize4/prize4.component';
import { Prize5Component } from './prize5/prize5.component';
import { Prize6Component } from './prize6/prize6.component';
import { Prize7Component } from './prize7/prize7.component';
import { Prize8Component } from './prize8/prize8.component';
import { Prize9Component } from './prize9/prize9.component';
import { Prize10Component } from './prize10/prize10.component';
import { Prize11Component } from './prize11/prize11.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  dialogRef : MatDialog){}
  @ViewChild(NgxWheelComponent, { static: false }) wheel:any;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[]=[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER

  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = [ '#ff0000', '#964B00']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
  }
  start() {
    this.wheel.spin()
  }
  before() {
    alert('Your wheel is about to spin')
  }

  async spin(prize:any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    alert('Please check your prize below')
  }
  openDialog(){
    this.dialogRef.open(PrizeComponent);
  }
  openDialog1(){
    this.dialogRef.open(Prize1Component);
  }
  openDialog2(){
    this.dialogRef.open(Prize2Component);
  }
  openDialog3(){
    this.dialogRef.open(Prize3Component);
  }
  openDialog4(){
    this.dialogRef.open(Prize4Component);
  }
  openDialog5(){
    this.dialogRef.open(Prize5Component);
  }
  openDialog6(){
    this.dialogRef.open(Prize6Component);
  }
  openDialog7(){
    this.dialogRef.open(Prize7Component);
  }
  openDialog8(){
    this.dialogRef.open(Prize8Component);
  }
  openDialog9(){
    this.dialogRef.open(Prize9Component);
  }
  openDialog10(){
    this.dialogRef.open(Prize10Component);
  }
  openDialog11(){
    this.dialogRef.open(Prize11Component);
  }
}
