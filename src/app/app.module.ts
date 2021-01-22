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
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventComponent } from './countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ViewDefaultComponent } from './view-default/view-default.component';
import { ViewShadowDomComponent } from './view-shadow-dom/view-shadow-dom.component';
import { ViewNoneComponent } from './view-none/view-none.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    RatingBarComponent,
    PipeDemoComponent,
    ViewEncapsulationComponent,
    ViewDefaultComponent,
    ViewShadowDomComponent,
    ViewNoneComponent
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
