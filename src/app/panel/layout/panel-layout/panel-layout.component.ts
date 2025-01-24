import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss'],
  standalone: false
})
export class PanelLayoutComponent {
  public togglerClicked = true;

  constructor() {}

  public toggleClicked(clicked: boolean) {
    this.togglerClicked = clicked;
  }
}
