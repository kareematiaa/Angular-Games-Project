import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _GamesService:GamesService) { }

  gamesList:any[]=[]

  getTrendingGames()
  {
    this._GamesService.getGame().subscribe((response)=>{
       this.gamesList=response;
       //console.log(this.gamesList[1]);
       
    })
  }

  ngOnInit(): void {
    this.getTrendingGames()
  }

}
