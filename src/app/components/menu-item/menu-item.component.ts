import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  
  @Input() data;
  viewHeight: number = 0; 
  
  constructor() { }

  getType() {
    return typeof this.data;
  }

}
