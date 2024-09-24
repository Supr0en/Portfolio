import { Component } from '@angular/core';
import { ProfileComponent } from '../../features/profile/profile.component';
import { ProjectsComponent } from '../../features/projects/projects.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProfileComponent, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
