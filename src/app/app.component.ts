import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  dataColumn: any = ['eid', 'food', 'origin'];
  data: any = [{
    eid: 'e101',
    ename: 'noodles',
    food: 'noodles',
    origin:'Japan',
    esal: 10001
  },{
    eid: 'e102',
    ename: 'Burritos',
    food: 'Burritos',
    origin:'Mexico',
    esal: 10201
  },{
    eid: 'e1021',
    ename: 'Tacos',
    food: 'Tacos',
    origin:'Mexico',
    esal: 10051
  },{
    eid: 'e103',
    ename: 'Hot Wings',
    food: 'Sad Hot Wings',
    origin:'A sad shack in the bronks',
    esal: 10401
  },{
    eid: 'e1412',
    ename: 'Pizza',
    food: 'Pizza',
    origin:'The Mafia',
    esal: 10021
  },];
  constructor(private excelService:ExcelService){

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, this.dataColumn, 'sample');
  }
}
