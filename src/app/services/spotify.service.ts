import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string ){    
    const url =`https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6Ohype9w3bEcG9MLnWh3p97YcCBpaIjAGcLOKhwLf5WzUeTg5w-37rOb5KHLI45HPRQ2YAQneeQLYBXgZ4c-H9Eoxd-Nw2RSU6VsNIPjfjscLCrwrKPPTd09qC84iGhTeSrOl_sUxA9pR0dYiJOmYaTLSAw1aEcI'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){   
    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data: any) => data.albums.items ) );
  }  
  

  getArtistas( termino: string ) {
    console.log(termino);
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( (data:any) => data.artists.items));
  }

  



  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( (data:any) => data.tracks));
  }



  
  //Sin terminar
  getMeUser() {
    return this.getQuery(`8ww85m0dc4o0ee2jryw2zc565`).pipe( map( (data:any) => data));
  }

}
