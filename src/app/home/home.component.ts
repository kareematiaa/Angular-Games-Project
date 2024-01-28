import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesList:any[]=[]

  constructor(private _GamesService:GamesService, private _Router:Router) { }

  // browse(){
  //   this._Router.navigateByUrl('/all')
  // }


  // getclick()
  // {
  //   $(".demo").click(function (event:any) {
  //     console.log(event.target.outerText);
  //     });
    
  // }
  


  getTrendingGames()
  {


    this._GamesService.getGame().subscribe((response)=>{
       this.gamesList=response.slice(0,3);
       //console.log(this.gamesList);
       
    })
  }

  ngOnInit(): void {
    this.getTrendingGames()
  }

}
