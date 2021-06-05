import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ReservacionService } from '../reservacion.service';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  nombre: any;
  costo: any;
  comidas: any;
  hotel: any;
  destino: any;
  imagen: any;
  actividades: any;
  idp:any;

  paquete: any = null;
  constructor(private router: Router, private reservacionSvc: ReservacionService) {
    const navigation = this.router.getCurrentNavigation();
    this.paquete= navigation?.extras?.state;
   }

  ngOnInit(): void {
  }
  Guardar():void{
    console.log("El paquete se guardo correctamente",this.reservacionForm.value)
    if(this.reservacionForm.valid){
      const paquete = this.reservacionForm.value;
      const paqueteID = paquete.id;
      this.reservacionSvc.GuardarReservacion(paquete, paqueteID);
      alert("Se guardo correctamente el paquete");
    }
    this.reservacionForm.reset;
  }

  reservacionForm=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    ci: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    origen: new FormControl('', [Validators.required]),
    nrop: new FormControl('', [Validators.required]),
    fechaI: new FormControl('', [Validators.required]),
    fechaF: new FormControl('', [Validators.required]),
    estado: new FormControl('por verificar'),
})

}
