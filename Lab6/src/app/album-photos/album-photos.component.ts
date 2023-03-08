import { Component , OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.sass']
})
export class AlbumPhotosComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute,private myService: ConfigService) {}
  data?: any[];
  id?: number;
  private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.myService.getDataPhotos(this.id?.toString()).subscribe((data) => {
      this.data = data;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
