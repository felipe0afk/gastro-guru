import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false // ESTO ES LO QUE ARREGLA EL ERROR
})
export class SettingsPage {
  constructor() {}
}