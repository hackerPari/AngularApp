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

    // Gets data from subjectService
    this.subjects = this.subjectService.getSubjectData();

    // Initializes the search filter
    this.searchFilter = '';

    // Sets the current tab
    this.currentTab = this.subjects[0].name;
  }


  // Following method is used to clear the search term whenever user switched the tab
  clearSearch(tab) {
    if (tab !== this.currentTab) {
      this.searchFilter = '';
      this.currentTab = tab;
    }
  }

}
