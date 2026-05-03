import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  imports: [

    RouterOutlet,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'delta-machine';
  protected readonly window = window;
  protected auth = inject(AuthService);
}
