import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/models/client';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientsJsonUrl = "assets/clients.json";
  selectedClient: BehaviorSubject<Client> = new BehaviorSubject(null);
  
  searchSubject: BehaviorSubject<String> = new BehaviorSubject(null);
  clientsList: BehaviorSubject<Client[]>;
  clientListNew : Client[];

  constructor( private http: HttpClient) { 
    this.getClientsList();
    this.searchSubject
      .subscribe((e) => { 
                          if(this.clientsList != undefined){
                            if(e != null && e.length) {
                              this.clientsList.next(this.clientListNew.filter((c)=> 
                               c.general.firstName.includes(e.toString()) || c.general.lastName.includes(e.toString())));
                            }
                            else if (e != null && !e.length){
                              this.clientsList.next(this.clientListNew);
                            }
                          }
                        })                 
  }

  getClientsList(){
    let list = this.http.get<Client[]>(this.clientsJsonUrl);
    list.subscribe((r) => {this.clientsList = new BehaviorSubject<Client[]>(r); this.clientListNew = r;} );
    return list;
  }
}
