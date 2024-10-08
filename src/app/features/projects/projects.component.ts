import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Projects from '../../../assets/content.json';
import { project } from '../../../assets/types/project-type';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
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

  constructor() {
    window.onload = () => {
      this.displayedProjectsName.unshift(this.projectInfo[0].name);
      this.displayedProjectDesc.unshift(this.projectInfo[0].desc);
      this.startSlidingAnimation();
    };
  }

  startSlidingAnimation() {
    let index: number = 1;
    setInterval(() => {
      if (this.projectInfo.length <= this.displayedProjectsName.length) {
        if (index == this.projectInfo.length) {
          index = 0;
        }
        this.displayedProjectsName.unshift(this.projectInfo[index].name);
        this.displayedProjectDesc.unshift(this.projectInfo[index].desc);
        this.displayedProjectsName.pop();
        this.displayedProjectDesc.pop();
        index++;
      } else {
        this.displayedProjectsName.unshift(this.projectInfo[index].name);
        this.displayedProjectDesc.unshift(this.projectInfo[index].desc);
        index++;
      }
    }, 9000); // Show each item every 10 second
  }
  // testFunction() {
  //   let index: number = 1;
  //   setInterval(() => {
  //     if (this.projectInfo.length <= this.displayedProjectsName.length) {
  //       if (index == this.projectInfo.length) {index = 0};
  //       this.displayedProjectsName.unshift(this.projectInfo[index]);
  //       this.displayedProjectsName.pop();
  //       index++;
  //     } else {
  //       this.displayedProjectsName.unshift(this.projectInfo[index]);
  //       index++;
  //     }
  //   }, 9000);
  // }
}
