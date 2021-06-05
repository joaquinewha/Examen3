import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PaquetesService } from '../paquetes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ne: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private paquetesSvc: PaquetesService){ }

  paquete$ = this.paquetesSvc.paquetes;
  
  public modulos:Array<any> =[]

  ngOnInit(): void {
    this.modulos =[
      {
        titulo:'¿Buscas un Hotel?',
        imagen: 'https://image.flaticon.com/icons/png/512/1668/1668915.png',
        texto:'Conceptosde Tecnología, TIC, NTIC, Evolución de las WEB, diferencia entre página, portal y sistema WEB.',
      },
      {
        titulo:'Encuentra tu vuelo ideal',
        imagen: 'https://images.vexels.com/media/users/3/153005/isolated/preview/b3c3b1a530afa43f61cf4207c75cc6e0-icono-de-trazo-de-color-de-avi-oacute-n-by-vexels.png',
        texto:'Conceptosde Tecnología, TIC, NTIC, Evolución de las WEB, diferencia entre página, portal y sistema WEB.',
      },
            {
        titulo:'Paquetes de Viaje',
        imagen: 'https://image.flaticon.com/icons/png/512/44/44448.png',
        texto:'Conceptosde Tecnología, TIC, NTIC, Evolución de las WEB, diferencia entre página, portal y sistema WEB.',
      },
      {
        titulo:'Pensamos en tu comodidad',
        imagen: 'https://image.flaticon.com/icons/png/512/47/47016.png',
        texto:'Conceptosde Tecnología, TIC, NTIC, Evolución de las WEB, diferencia entre página, portal y sistema WEB.',
      }
    ]
  }

  Ver(item:any):void{
    this.ne.state = item;
    this.router.navigate(['paquete'], this.ne);
  }

}
