import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {


  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService) { }

  gameId: string | null = ''
  gameData: any;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1700,
    autoplayHoverPause: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.paramMap.get("id")

    this._GamesService.getMovieDetails(this.gameId).subscribe((Response) => {
      this.gameData = Response;
      console.log(this.gameData);


    })



  }

}
