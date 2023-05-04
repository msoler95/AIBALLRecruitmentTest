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
  

  
  public progress = 0;

  constructor() {
    let internval = setInterval(() => {
      this.progress += 0.07;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > this.value/100) {
        clearInterval(internval)
      }
    }, 50);
  }

  ngOnInit() {}

}
