import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from 'src/app/models/client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor( public cs: ClientsService) { }

  onItemClick(client: Client){
    this.cs.selectedClient.next(client);
  }

  ngOnInit() {
  }
}
