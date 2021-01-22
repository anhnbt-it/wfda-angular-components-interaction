import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.css']
})
export class CountdownTimerGetSetComponent implements OnInit, OnDestroy {

  private _seconds = 11;

  @Input()
  get seconds(): number {
    return this._seconds;
  }

  set seconds(v) {
    v = (typeof v === 'undefined') ? 11 : v;
    const vFixed = Number(v);
    this._seconds = (Number.isNaN(vFixed)) ? 11 : vFixed;
  }

  private intervalId = 0;
  message = '';

  remainingTime: number;

  constructor() { }

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
