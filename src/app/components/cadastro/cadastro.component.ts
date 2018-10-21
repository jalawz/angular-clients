import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  riscos:string[] = ['A', 'B', 'C'];

  cliente:Cliente;

  success:boolean = false;

  errorMessage:boolean = false;

  fieldErrors:any[];

  constructor(public service:ClienteService, public router:Router) {
    this.cliente = new Cliente(); 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.insertCliente(this.cliente).subscribe(data => {
      this.fieldErrors = [];
      this.success = true;
      this.cliente = new Cliente();
      setTimeout(() => {
        this.success = false;
        this.router.navigate(['/']);
      }, 1300);
    }, err => {
      this.errorMessage = true;
      this.fieldErrors = err.json().errors;
    });
  }

}
