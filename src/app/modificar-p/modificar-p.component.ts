import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaquetesService } from '../paquetes.service';


@Component({
  selector: 'app-modificar-p',
  templateUrl: './modificar-p.component.html',
  styleUrls: ['./modificar-p.component.css']
})
export class ModificarPComponent implements OnInit {

  paquete$ = this.paquetesSvc.paquetes;

  nombre: any;
  costo: any;
  comidas: any;
  hotel: any;
  destino: any;
  imagen: any;
  actividades: any;

  constructor(private router: Router, private paquetesSvc: PaquetesService){ }

  ngOnInit(): void {
  }

  Editar(item:any):void{
    this.paqueteForm.patchValue(item);
  }
  Borrar(item:any):void{
    try{
      const paquete = this.paqueteForm.value;
      const paqueteID = paquete.id;
      this.paquetesSvc.BorrarPaquetes(paqueteID)
    }catch(err){
      console.log(err)
    }

  }
  Guardar():void{
    console.log("El paquete se guardo correctamente",this.paqueteForm.value)
    if(this.paqueteForm.valid){
      const paquete = this.paqueteForm.value;
      const paqueteID = paquete.id;
      this.paquetesSvc.GuardarPaquetes(paquete, paqueteID);
      alert("Se guardo correctamente el paquete");
    }
    this.paqueteForm.reset;
  }
  paqueteForm=new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      costo: new FormControl('', [Validators.required]),
      comidas: new FormControl('', [Validators.required]),
      hotel: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      actividades: new FormControl('', [Validators.required]),
  })
}
