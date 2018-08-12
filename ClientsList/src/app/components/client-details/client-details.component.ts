import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/models/client';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientDetails: Client;

  constructor( private cs: ClientsService) { }

  ngOnInit() {
    this.cs.selectedClient.subscribe((e) => this.clientDetails = e);
  }
}
