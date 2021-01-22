import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  today: Date = new Date();

  user = {
    name: 'Tuan Anh'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
