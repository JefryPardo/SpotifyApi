import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  constructor(private spotify: SpotifyService) { 
    this.buscar();
  }

  usuarios: any;
  ver: boolean = false;
  
  buscar(){  
    this.ver = true;
    this.spotify.getMeUser().subscribe( (data: any) => { this.usuarios = data; console.log(this.usuarios)});
  }



}
