import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app-routing.module.js';
import { AppComponent } from './app.component';
import { LayoutComponent } from './public/layout/layout.component.js';
import { NotFoundComponent } from './public/pages/not-found/not-found.component.js';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelLayoutComponent } from './panel/layout/panel-layout/panel-layout.component.js';
import { PanelHeaderComponent } from './panel/layout/panel-header/panel-header.component.js';
import { SideBarComponent } from './panel/layout/side-bar/side-bar.component.js';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    PanelLayoutComponent,
    PanelHeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
      enableHtml: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
