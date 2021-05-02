import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';



const appRoutes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Browse', component: BrowseComponent },
    { path: 'liked-songs', component: LikedSongsComponent },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
