import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Reservaciones } from './models/reservaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  reservacion!: Observable<Reservaciones[]>;

  private reservacionesCollection: AngularFirestoreCollection<Reservaciones>;

  constructor( private readonly afs: AngularFirestore) {
    this.reservacionesCollection = afs.collection<Reservaciones>('reservaciones');
   }
   GuardarReservacion(reservacion: Reservaciones,empId: string): Promise<void>{
    return new Promise(async(resolve, reject) =>{
      try{
        const id = empId || this.afs.createId();
        const data = {id, ...reservacion};
        const result = this.reservacionesCollection.doc(id).set(data);
        resolve(result);
      }catch(err){
        reject(err.message)
      }
    });
  }

}
