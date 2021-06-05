import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  paquete: any = null;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.paquete= navigation?.extras?.state;
   }

  ngOnInit(): void {

  }

  ne: NavigationExtras = {
    state: {
      value: null
    }
  };
  Reservar(item:any):void{
    this.ne.state = item;
    this.router.navigate(['reservacion'], this.ne);
  }

}
