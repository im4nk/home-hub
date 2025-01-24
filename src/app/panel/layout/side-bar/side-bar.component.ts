import { Component, DoCheck, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuList } from './main-menu';

@Component({
  selector: 'panel-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: false
})
export class SideBarComponent implements DoCheck {
  public mainMenu = MainMenuList;
  public currentRoute = '';
  public opened = true;
  public changeColor?: number;
  public findUrlPage?: string;

  constructor(
    private router: Router
  ) { }

  @Input('toggler-clicked') set togglerClicked(value: boolean) {
    if (value) {
      this.opened = value
    }
  }

  @Output('open-status') emitOpenStatus = new EventEmitter<boolean>();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 1199) {
      this.opened = true;
      this.emitOpenStatus.emit(this.opened);
    }
  }

  ngDoCheck(): void {
    this.setActiveColor(this.mainMenu.findIndex((el: any) => el.link?.includes((window.location.href.substring(window.location.href.lastIndexOf('/panel')).split('/', 4).join('/')).split('?')[0])));
    this.getMenuItem();
  }

  public applyMenuItem(currentLink?: string) {
    if (currentLink) {
      this.currentRoute = currentLink;
      if (window.location.href.includes('/profile')) { this.router.navigate([window.location.href.substring(window.location.href.lastIndexOf('/panel')).split('/', 4).join('/')]); }
      setTimeout(() => { this.router.navigate([currentLink]); }, 1);
    }
  }

  public setActiveColor(index: number) {
    this.changeColor = index;
    this.findUrlPage = '';
  }

  public toggleSidebar(): void {
    this.opened = !this.opened;
    this.emitOpenStatus.emit(this.opened);
  }

  public signOut() {
    this.router.navigate(['/']);
  }

  private getMenuItem() {
    const currentUrl = (window.location.href).split('?')[0];
    if (currentUrl.includes('/panel')) {
      this.findUrlPage = currentUrl.substring(currentUrl.lastIndexOf('/panel')).split('/', 4).join('/');
    }
  }
}