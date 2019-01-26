import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowDataComponent } from './views/show-data/show-data.component';

import { FormsModule } from '@angular/forms';
import { ChapterFilterPipe } from './pipes/chapter-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    ChapterFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
