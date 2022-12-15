import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  user:any
  profile:any
  defaultAvatar: string = "/assets/img-nav/avatar-default-icon.jpg"
  constructor(
    private tokenService: TokenStorageService,
    private profileService: ProfileService,

  ) { }

  ngOnInit(): void {
    this.user=this.tokenService.getUser();
    this.getProfile();
  }
  getProfile () {
    this.profileService.getProfile().subscribe ({
      next:(response:any)=>{
        this.profile = response.data
       /* console.log(this.profile); */
       
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}
