import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  currentBattles: any;
  currentPage: any;
  battleDetails: any;
  searchTerm = '';
  battleTypeCount: any;
  attackerKingAggregate: any;
  defenderKingAggregate: any;
  minMaxAvgDefenderAggregate: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.currentPage = 1;
    this.listBattles();
  }


  listBattles() {
    this.http.get('/battles/', {params: {
        page: this.currentPage,
        searchTerm: this.searchTerm
      }}).subscribe(data => {
      console.log(data);
      this.currentBattles = data;
    });
  }

  getBattleDetails(battle) {
    this.http.get('/battleDetails/', {params: {
        id: battle.id
      }}).subscribe(data => {
      console.log(data);
      this.battleDetails = data;
    });
  }

  getAttackerKingAggregate() {
    this.http.get('/attackerKingAggregate/').subscribe(data => {
      this.attackerKingAggregate = data;
    });
  }

  getDefenderKingAggregate() {
    this.http.get('/defenderKingAggregate/').subscribe(data => {
      this.defenderKingAggregate = data;
    });
  }

  getBattleTypeAggregate() {
    this.http.get('/battleTypeAggregate/').subscribe(data => {
      this.battleTypeCount = data;
    });
  }

  getMinMaxAvgDefenderSize() {
    this.http.get('/minMaxAvgDefenderSize/').subscribe(data => {
      this.minMaxAvgDefenderAggregate =  data;
    });
  }

  previousPage() {
    this.currentPage -= 1;
    this.listBattles();
  }

  nextPage() {
    this.currentPage += 1;
    this.listBattles();
  }

  searchBattles() {
    this.currentPage = 1;
    this.listBattles();
  }

}
