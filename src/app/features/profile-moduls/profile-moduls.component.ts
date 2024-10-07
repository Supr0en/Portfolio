import { Component, OnInit } from '@angular/core';
import * as profileData from '../../../assets/content.json';

@Component({
  selector: 'app-profile-moduls',
  standalone: true,
  imports: [],
  templateUrl: './profile-moduls.component.html',
  styleUrl: './profile-moduls.component.css'
})
export class ProfileModulsComponent implements OnInit{
  data: any = profileData
  header: string = '';
  content: string = '';
  education: string = '';
  devStack: string = '';
  future: string = '';
  profileImg = "assets/Images/profile.jpg"
  
  ngOnInit(): void {
    this.header = this.data.profile.header;
    this.content = this.data.profile.text;
    this.education = this.data.profile.education;
    this.devStack = this.data.profile.devStack;
    this.future = this.data.profile.future;
  }
}
