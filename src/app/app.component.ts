import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Statistics', url: '/statistics', icon: 'stats-chart' },
    { title: 'Change JSON', url: '/json', icon: 'document' },
    { title: 'Settings', url: '/settings', icon: 'settings' }
  ];
  public labels = []
  constructor( private renderer: Renderer2,) {
    this.renderer.setAttribute(
      document.body,
      "color-theme",
      'ligth'
    );
  }
}
