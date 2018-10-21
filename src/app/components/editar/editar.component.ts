import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Cliente } from 'src/models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string;
  riscos:string[] = ['A', 'B', 'C'];
  cliente:Cliente;
  success:boolean = false

  constructor(private activatedRoute: ActivatedRoute, private service:ClienteService, private router:Router) { 
    this.cliente = new Cliente();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.findById(this.id).subscribe(res => {
      this.cliente = res.json();
    });
  }

  onSubmit() {
    this.service.updateCliente(this.cliente).subscribe(res => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.router.navigate(['/']);
      }, 1300);
    });
  }

}
