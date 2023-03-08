import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  data?: any[];

  constructor(private myService: ConfigService) { }
  ngOnInit() {
    this.myService.getData().subscribe((data) => {
      this.data = data;
    });
  }
  delete(a?: object){
    var filtered = this.data?.filter(function(ele){
      return ele != a;
    })
    this.data = filtered;
  }


}
