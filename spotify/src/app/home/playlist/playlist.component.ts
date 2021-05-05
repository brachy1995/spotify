import { Component, OnInit } from '@angular/core';
import {Playlist} from './playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})

export class PlaylistComponent implements OnInit {
  playlists: Playlist[]=[
    new Playlist("Listen to the best songs from the 60's",
	   "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
	  "Best of 60's",
	   "3533"),
     new Playlist("Start your day with calm and cool jazz",
     "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
     "Jazzy Morning","37i9dQZF1DXdziGPHNE40t"),
     new Playlist("The home for alternative electronic music. Cover: Fred again.. and The Blessed Madonna",
     "https://i.scdn.co/image/ab67706f0000000345e1025ae30404128c57d824",
     "Altar",
     "37i9dQZF1DXdwmD5Q7Gxah"),
     new Playlist("Smooth joints. Cover: Ruti",
     "https://i.scdn.co/image/ab67706f00000003cb35da286acfe287316c4640",
     "Butter",
     "37i9dQZF1DWVzZlRWgqAGH"),
     new Playlist("Feel great with these timelessly fun songs!",
     "https://i.scdn.co/image/ab67706f00000003e649da22aa371c86c801603f",
     "Have a Great Day!","37i9dQZF1DX7KNKjOK0o75"),
     new Playlist("Chill beats for cool coffeehouse vibes.",
     "https://i.scdn.co/image/ab67706f000000033f861d7f7b340e5e4934bb78",
     "Lo-Fi Cafe","37i9dQZF1DX9RwfGbeGQwP"),
     new Playlist("Lounge and chill out music for your workday.",
     "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
     "Workday Lounge",
     "37i9dQZF1DWT5lkChsPmpy"),
     new Playlist("Curl up in your favorite spot with some sweet, mellow tunes...",
     "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
     "Your Favorite Coffeehouse",
     "37i9dQZF1DX6ziVCJnEm59"),
     new Playlist("Chillout hip-hop vibes. Cover: Kota The Friend",
     "https://i.scdn.co/image/ab67706f00000003dd2fb26650c3d75d8a32c972",
     "Mellow Bars",
     "37i9dQZF1DWT6MhXz0jw61"),
     new Playlist("High-Key bangers for Low-Key enjoyment.",
     "https://i.scdn.co/image/ab67706f00000003c0c5bb00461fd08b95f9b9da",
     "Low-Key","37i9dQZF1DX2yvmlOdMYzV")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
