import { Component, Input, OnInit } from '@angular/core';

import { MenuObject } from '../../entities/MenuObject';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() data;
  menuObjects: MenuObject[] = [];

  constructor() { }

  ngOnInit() {
    this.renderData();
  }

  renderData() {
    for(let key in this.data) {
      let dataPair: MenuObject = {key: key, data: this.data[key]};
      this.menuObjects.push(dataPair);
    }
  }

  isObject(data: any) {
    if(data instanceof Object) {
      return true;
    }
    
    return false;
  }
}
