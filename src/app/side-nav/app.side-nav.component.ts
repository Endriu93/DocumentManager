/**
 * Created by Andrzej on 06.05.2017.
 */
import { Component } from '@angular/core';
import { SideNavMenuItem } from './side-nav-menu-item';

@Component({
  selector: 'side-nav',
  templateUrl: './app.side-nav.html',
  styleUrls: ['./app.side-nav.css']
})
export class SideNavComponent  {
  menuItems: SideNavMenuItem[] = [
    {name: 'Lista Dokumentów' , icon: 'folder_open'},
    {name: 'Lista Aktywności' , icon: 'event'}
  ];
  userName: string = 'User 11';
  groupName: string = 'Group 1';
}
