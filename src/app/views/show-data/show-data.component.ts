import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubjectsService} from '../../services/subjects.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  subjects: any;
  searchFilter: any;
  currentTab: any;

  constructor(private http: HttpClient, private subjectService: SubjectsService) { }

  ngOnInit() {

    this.subjects = this.subjectService.getSubjectData();
    this.searchFilter = '';
    this.currentTab = this.subjects[0].name;
  }

  clearSearch(tab) {
    if (tab !== this.currentTab) {
      this.searchFilter = '';
      this.currentTab = tab;
    }
  }

}
