import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { EventType, Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _GamesService:GamesService,private _Router:Router) { }
  

  gamesList:any[]=[]

  getCategoryGames()
  {
    this._GamesService.getCategory(this._GamesService.dataValue).subscribe((response)=>{

       this.gamesList=response;
       //console.log(this.gamesList);
    })
  }

  ngOnInit(): void {
    this.getCategoryGames()
  }

}
