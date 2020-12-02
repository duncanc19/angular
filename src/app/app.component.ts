import { Component, OnInit } from '@angular/core';
import "@angular/compiler";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistsPipe } from './search-artists.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the Learn Angular app';
  query: string;
  artists: any[];
  something: any;

  showArtist(artist) {
    this.query = artist.name;
    artist.highlight = !artist.highlight;
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    );
  }
}
