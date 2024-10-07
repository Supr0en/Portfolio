import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Projects from '../../../assets/content.json';
import { project } from '../../../assets/types/project-type';

@Component({
  selector: 'app-project-moduls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-moduls.component.html',
  styleUrl: './project-moduls.component.css'
})
export class ProjectModulsComponent implements OnInit {
  data: any = Projects;
  projectInfo: project[] = [];
  displayedProjectsName: string[] = [];
  displayedProjectDesc: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.data.projects.length; i++) {
      let projectName: string = this.data.projects[i].projectName;
      let projectDesc: string = this.data.projects[1].description;
      const projectItems: project = {
        name: projectName,
        desc: projectDesc,
      };
      this.projectInfo.push(projectItems);
    }
  }
}
