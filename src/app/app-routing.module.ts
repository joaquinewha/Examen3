import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModificarPComponent } from './modificar-p/modificar-p.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { ReservacionComponent } from './reservacion/reservacion.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contactos',
    component:ContactosComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login/modificar',
    component:ModificarPComponent
  },
  {
    path:'paquete',
    component:PaqueteComponent
  },
  {
    path:'reservacion',
    component:ReservacionComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
