import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {



  dataValue:any=new BehaviorSubject(null)
  
  

  constructor(private http: HttpClient) { }

  getGame(): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: { 'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' }})

  }

  getCategory(categoryy:any): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: { 'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' },params:{'category':`${categoryy}`} })

  }

  getSortBy(sorts:any): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: { 'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' },params:{'sort-by':`${sorts}`} })

  }

  getplatforms(platform:any): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: { 'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' },params:{'platform':`${platform}`} })

  }

  getMovieDetails(mId:string|null): Observable<any> {
    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, { headers: { 'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' },params:{'id':`${mId}`} })

  }
}
