import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  constructor(private _GamesService:GamesService) { }
  sortList:any[]=[]

  getSortGames()
  {
    this._GamesService.getSortBy(this._GamesService.dataValue).subscribe((response)=>{

       this.sortList=response;
       //console.log(this.sortList);
    })
  }

  ngOnInit(): void {
    this.getSortGames()
  }

}
