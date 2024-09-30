import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio - Ruotsalainen';
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
  faChevronUp = faChevronUp;
}
