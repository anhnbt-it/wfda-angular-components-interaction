import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-alias',
  templateUrl: './countdown-timer-alias.component.html',
  styleUrls: ['./countdown-timer-alias.component.css']
})
export class CountdownTimerAliasComponent implements  OnInit, OnDestroy, OnChanges {

  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input('remaining-time') seconds = 11;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = (typeof v === 'undefined') ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  start(): void {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(): void {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
