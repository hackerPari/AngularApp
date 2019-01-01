import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit, OnDestroy {

  data: any;
  private req: any;
  url = '/getData/';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.req = this.http.get(this.url).subscribe(data => {
      console.log(data);
      this.data = data as [any];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
