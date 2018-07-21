import { Component, OnInit } from '@angular/core';
import { NavItem } from './navitem.model';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NavbarService]
})
export class NavbarComponent implements OnInit {
  private flag = false;
  private navItems: NavItem[] = [];
  private navItemsExtra: NavItem[] = [];


  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    // this.navItems = this.navbarService.getNavItems();
    this.navbarService.getNavItems()
      .subscribe(
        (data: NavItem[]) => {
          data.map((val, index) => {
            
            if (val.priority > 4) {
              this.navItemsExtra.push(new NavItem(val.name, val.priority));
            }
            else {
              this.navItems.push(new NavItem(val.name, val.priority));
            }
          })

        },
        (error) => {
          console.log('am eroarea: ', error);
          this.navItems = [];
        }
      )
  }

}
