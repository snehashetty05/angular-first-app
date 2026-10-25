import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  imports: [Greeting],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  homeMessage = signal('Welcome to the Home Page!');

  onKeyUp(event: KeyboardEvent) {
    console.log('Key up event triggered ',event.key);
  }
}
