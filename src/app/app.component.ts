import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from './features/form/form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, FontAwesomeModule, RouterLink, RouterLinkActive, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio - Ruotsalainen';
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
  faChevronUp = faChevronUp;

  @ViewChild(FormComponent) bottomSheetForm!: FormComponent;

  openBottomSheet(): void {
    this.bottomSheetForm.open();  // Trigger the opening of the bottom sheet form
  }
}
