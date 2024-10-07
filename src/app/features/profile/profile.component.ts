import { Component, OnInit} from '@angular/core';
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
  header: string = '';
  content: string = '';
  profileImg = "assets/Images/profile.jpg";
  
  ngOnInit(): void {
    this.header = this.data.profile.header;
    this.content = this.data.profile.text;
  }
}
