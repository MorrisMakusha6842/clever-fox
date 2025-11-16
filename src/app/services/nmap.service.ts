import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

export interface NmapCommand {
  id: string;
  name: string;
  command: string;
}

@Injectable({
  providedIn: 'root'
})
export class NmapService {
  private http: HttpClient = inject(HttpClient);
  private firestore: Firestore = inject(Firestore);
  // Replace with your actual cloud function URL once deployed
  private functionUrl = 'YOUR_CLOUD_FUNCTION_URL_HERE'; 

  getCommands(): Observable<NmapCommand[]> {
    const commandsCollection = collection(this.firestore, 'nmap_commands');
    return from(getDocs(commandsCollection).then(snapshot => {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NmapCommand));
    }));
  }

  runScan(commandId: string, target: string): Observable<string> {
    const url = `${this.functionUrl}/runNmapScan`;
    return this.http.post(url, { commandId, target }, { responseType: 'text' });
  }
}
