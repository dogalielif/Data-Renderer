import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent, MenuItemComponent } from './components';
import { SpinnerModule } from './+lib';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
