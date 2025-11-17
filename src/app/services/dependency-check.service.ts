import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DependencyCheckService {
  private firestore: Firestore = inject(Firestore);

  checkNmapStatus(machineId: string): Observable<boolean> {
    const dependencyRef = doc(this.firestore, `systems/${machineId}/dependencies/nmap`);
    return from(getDoc(dependencyRef)).pipe(
      map(docSnap => docSnap.exists() && docSnap.data()['installed'])
    );
  }
}