import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-event',
  templateUrl: './countdown-timer-event.component.html',
  styleUrls: ['./countdown-timer-event.component.css']
})
export class CountdownTimerEventComponent implements OnInit, OnDestroy, OnChanges {

  @Output() finish = new EventEmitter<boolean>();

  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input() seconds = 11;

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

        this.finish.emit(true);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
