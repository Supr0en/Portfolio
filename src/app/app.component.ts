import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio - Ruotsalainen';
}
