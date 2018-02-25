import { Component, OnInit } from '@angular/core';
import { Propertydata } from '../models/propertydata';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  public data:Propertydata[] = [];
  constructor() { }

  ngOnInit() {
    //ダミーデータの生成
    for (let i = 1; i <= 1000; i++) {
      let propetyData = new Propertydata();
      propetyData.propertyId = i;
      propetyData.propertyName = `備品 ${i}`;
      propetyData.isUsed = i % 4 === 0 ? false : true,
      propetyData.purchaseDate = new Date(2017,0,i);
      this.data.push(propetyData);
    }
  }
}
