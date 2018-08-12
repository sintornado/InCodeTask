import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputValue: string;

  constructor(public cs: ClientsService) { }

  onSearchChange(searchValue :String) {
    this.cs.searchSubject.next(searchValue);

  }

  ngOnInit() {
    
  }

}
