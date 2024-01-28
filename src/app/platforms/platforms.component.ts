import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {

  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute,) { }

  platformList: any[] = []
  platformId: string | null = ''
  
 
  
  linkValue:any=this._GamesService.dataValue
  
    
  getPlatformGames() {
    this._GamesService.getplatforms(this.linkValue).subscribe((response) => {

      this.platformList = response;
      //console.log(this.platformList);
    })
  }

  ngOnInit(): void {
     
    this.getPlatformGames()

  }

}
