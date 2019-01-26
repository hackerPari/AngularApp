import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowDataComponent } from './views/show-data/show-data.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';

import { AppRoutingModule } from './views/app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ChapterFilterPipe } from './pipes/chapter-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PagenotfoundComponent,
    ChapterFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
