import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent  implements OnInit {

  @Input() value: number = 0;
  @Input() color: string = 'primary';
  @Input() name: string = '';
  

  
  constructor() { }

  ngOnInit() {}

}
