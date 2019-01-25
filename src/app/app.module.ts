import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    FormsModule,  
    HttpClientModule,
    SpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
