import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Paquetes } from './models/paquetes.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  paquetes!: Observable<Paquetes[]>;

  private paquetesCollection: AngularFirestoreCollection<Paquetes>;

  constructor(private readonly afs: AngularFirestore) {
    this.paquetesCollection = afs.collection<Paquetes>('paquetes');
    this.getPaquetes();
   }

  BorrarPaquetes(empId: string): Promise<void>{
    return new Promise(async(resolve, reject) =>{
      try{
        const result = this.paquetesCollection.doc(empId).delete();
        resolve(result);
      }catch(err){
        reject(err.message)
      }
    });
  }

  GuardarPaquetes(paquete: Paquetes,empId: string): Promise<void>{
    return new Promise(async(resolve, reject) =>{
      try{
        const id = empId || this.afs.createId();
        const data = {id, ...paquete};
        const result = this.paquetesCollection.doc(id).set(data);
        resolve(result);
      }catch(err){
        reject(err.message)
      }
    });
  }

  private getPaquetes(): void{
    this.paquetes = this.paquetesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()as Paquetes))
    );
  }
}

