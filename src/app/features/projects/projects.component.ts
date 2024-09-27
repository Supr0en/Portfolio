import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
  ngOnInit() {
    this.items = [...this.items, ...this.items];
  }

}
