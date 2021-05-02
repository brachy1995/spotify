export class Playlist{
  public imagePath: string;
  public title: string;
  public description: string;
  public playlist_id: string;
  constructor(desc: string , imagePath: string ,title: string, playlist_id: string ){
      this.imagePath=imagePath;
      this.title=title;
      this.description=desc;
      this.playlist_id=playlist_id
  }
}




