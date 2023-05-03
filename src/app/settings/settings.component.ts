import { Component, OnInit, Renderer2 } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {

  constructor(    private renderer: Renderer2,) { }

  ngOnInit() {}

  async changeToDarkTheme(event: any) {
    if (event.detail.checked) {
      /* document.body.setAttribute("color-theme", "dark"); */
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "ligth");
    }
  }

}
