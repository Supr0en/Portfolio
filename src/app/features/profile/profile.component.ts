import { Component, OnInit } from '@angular/core';
import * as profileData from '../../../assets/content.json';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  data: any = profileData
  ngOnInit(): void {
  }
}
