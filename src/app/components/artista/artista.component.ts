import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private actRouter: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.actRouter.params.subscribe(params => { 
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
     });
  }

  getArtista(id: string){
    this.spotify.getArtista( id ).subscribe( (artista:any) => { 
      this.artista = artista;
      this.loading = false;
    });     
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks( id ).subscribe(_topTracks =>{
      this.topTracks = _topTracks;
      console.log(_topTracks);
    }); 
  }



}
