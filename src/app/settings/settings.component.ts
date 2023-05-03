import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {

  constructor(    private renderer: Renderer2, private el: ElementRef) { }
  isDarkMode = false;
  ngOnInit() {
    this.isDarkMode = this.triggerPosition()
  }

  triggerPosition() {
   return document.body.getAttribute('color-theme') === 'dark' ;
  }
  async changeToDarkTheme(event: any) {
    if (event.detail.checked) {
      /* document.body.setAttribute("color-theme", "dark"); */
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "ligth");
    }
  }

}
