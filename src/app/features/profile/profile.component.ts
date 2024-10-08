import { Component, OnInit} from '@angular/core';
import * as profileData from '../../../assets/content.json';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  data: any = profileData
  header: string = '';
  content: string = '';
  profileImg = "assets/Images/profile.jpg";
  
  ngOnInit(): void {
    this.header = this.data.profile.header;
    this.content = this.data.profile.text;
  }
}
