import { Component } from '@angular/core';
import { ProfileComponent } from '../../features/profile/profile.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProfileComponent, ProjectsComponent, RouterLink, RouterLinkActive],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
