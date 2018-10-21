import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes:any[];

  isSuccess:boolean = false;

  constructor(public service:ClienteService, public router:Router) { 
    service.getAll().subscribe(data => {
      this.clientes = data.json();
    });
  }

  ngOnInit() {
  }

  deleteCliente(id) {
    this.service.removeCliente(id).subscribe(res => {
      window.location.reload();
    });
  }

}
