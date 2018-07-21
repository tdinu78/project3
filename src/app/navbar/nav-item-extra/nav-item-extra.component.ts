import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../navitem.model';

@Component({
  selector: 'app-nav-item-extra',
  templateUrl: './nav-item-extra.component.html',
  styleUrls: ['./nav-item-extra.component.scss']
})
export class NavItemExtraComponent implements OnInit {

  @Input() navItemExtra: NavItem;
  
  constructor() { }

  ngOnInit() {
  }

}
