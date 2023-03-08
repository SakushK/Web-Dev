import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit, OnDestroy{
  constructor(private route: ActivatedRoute,private myService: ConfigService) {}
  data?: any;
  id?: number;
  private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.myService.getDataDetail(this.id?.toString()).subscribe((data) => {
      this.data = data;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save(){
    var el = document.getElementById('input') as HTMLInputElement;
    this.data.title=el.value;
  }
  return(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.myService.getDataDetail(this.id?.toString()).subscribe((data) => {
      this.data = data;
    });
  }

}
