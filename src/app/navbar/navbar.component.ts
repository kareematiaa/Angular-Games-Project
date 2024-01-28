import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { GamesService } from '../games.service';
GamesService


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;

  constructor(private _AuthService:AuthService,private _GamesService:GamesService) { }

  linkVlue:any='';

  getLinkName(linkName:any){
   this.linkVlue=linkName
   //console.log(this.linkVlue);
   this._GamesService.dataValue=this.linkVlue
   
  }
  

  logout()
  {
    this._AuthService.logout()
  }

  ngOnInit(): void {

    this._AuthService.userData.subscribe(()=>{
       
      if(this._AuthService.userData.getValue())
      {
        this.isLoggedIn=true;
      }
      else
      {
        this.isLoggedIn=false;
      }


    })
  

}
}
