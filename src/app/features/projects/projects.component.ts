import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Projects from '../../../assets/content.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  data: any = Projects;
  projectNames: string[] = [];
  displayedItems: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.data.projects.length; i++) {
      let project: string = this.data.projects[i].projectName;
      this.projectNames.push(project);
    }
    console.log(this.projectNames);
  }
  
  constructor() {
    window.onload = () => {
      this.displayedItems.unshift(this.projectNames[0]);
      this.startSlidingAnimation();
    };
  }

  startSlidingAnimation() {
    let index: number = 1;
    setInterval(() => {
      if (this.projectNames.length <= this.displayedItems.length) {
        if (index == this.projectNames.length) {index = 0};
        this.displayedItems.unshift(this.projectNames[index]);
        this.displayedItems.pop();
        index++;
      } else {
        this.displayedItems.unshift(this.projectNames[index]);
        index++;
      }
      // if (this.items.length < this.displayedItems.length) {
      //   this.displayedItems.unshift(this.items[index]);
      //   index++;
      // }
    }, 9000); // Show each item every 10 second
  }
}