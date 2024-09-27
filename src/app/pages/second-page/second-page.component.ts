import { Component } from '@angular/core';
import { ProjectModulsComponent } from '../../features/project-moduls/project-moduls.component';
import { ProfileModulsComponent } from '../../features/profile-moduls/profile-moduls.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [ProjectModulsComponent, ProfileModulsComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

}
