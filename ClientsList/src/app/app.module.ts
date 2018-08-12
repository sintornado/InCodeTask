import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { ClientDetailsComponent } from 'src/app/components/client-details/client-details.component';
import { ClientListComponent } from 'src/app/components/client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ClientDetailsComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
