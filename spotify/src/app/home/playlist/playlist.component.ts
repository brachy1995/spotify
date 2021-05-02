import { Component, OnInit } from '@angular/core';
import {Playlist} from './playlist.model';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[]=[
    new Playlist("Listen to the best songs from the 60's",
	   "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
	  "Best of 60's",
	   "3533")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
