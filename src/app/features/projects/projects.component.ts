import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  items: string[] = ['extension', 'school', 'website', 'school2', 'algorithm', 'website2'];
  displayedItems: string[] = [];
  
  constructor() {
    window.onload = () => {
      this.displayedItems.unshift(this.items[0]);
      this.startSlidingAnimation();
    };
  }

  startSlidingAnimation() {
    let index: number = 1;
    setInterval(() => {
      if (this.items.length <= this.displayedItems.length) {
        if (index == this.items.length) {index = 0};
        this.displayedItems.unshift(this.items[index]);
        this.displayedItems.pop();
        index++;
      } else {
        this.displayedItems.unshift(this.items[index]);
        index++;
      }
      // if (this.items.length < this.displayedItems.length) {
      //   this.displayedItems.unshift(this.items[index]);
      //   index++;
      // }
    }, 9000); // Show each item every 10 second
  }
}