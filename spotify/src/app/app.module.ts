import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { AppRoutingModule} from './app-routing.module';
import { PlaylistComponent } from './home/playlist/playlist.component';
// import { Routes } from '@angular/router'; // CLI imports router

// const appRoutes: Routes = [ 
//   { path: 'home', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'browse', component: BrowseComponent },
//   { path: 'liked-songs', component: LikedSongsComponent },
// ];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    BrowseComponent,
    LikedSongsComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
