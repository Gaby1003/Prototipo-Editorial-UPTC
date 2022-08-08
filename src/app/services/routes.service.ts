import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {


  constructor(private firestore: Firestore) {

  }

  getRoutes(id: string){
    const route_by_id = doc(this.firestore, `social-media/${id}`);
    return docData(route_by_id, { idField: 'id' });
  }

}
