import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import { FirstComponent } from './layout/first/first.component';
import { SecondComponent } from './layout/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'name-card',
        component: NameCardComponent,
      },
      {
        path: 'first-component',
        component: FirstComponent
      },
      {
        path: 'second-component',
        component: SecondComponent
      }
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
