import { Componente01Component } from './componente01/componente01.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente02Component } from './componente02/componente02.component';
import { Componente03Component } from './componente03/componente03.component';
import { Componente04Component } from './componente04/componente04.component';
import { Componente05Component } from './componente05/componente05.component';
import { Componente06Component } from './componente06/componente06.component';
import { Componente07Component } from './componente07/componente07.component';
import { Componente08Component } from './componente08/componente08.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Componente01Component,
    Componente02Component,
    Componente03Component,
    Componente04Component,
    Componente05Component,
    Componente06Component,
    Componente07Component,
    Componente08Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
