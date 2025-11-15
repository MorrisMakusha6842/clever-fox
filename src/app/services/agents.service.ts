import { inject, Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, updateDoc, serverTimestamp, FieldValue } from '@angular/fire/firestore';
import { from, switchMap } from 'rxjs';

export interface Agent {
  uid: string;
  email: string;
  displayName?: string;
  createdAt?: FieldValue;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private firestore: Firestore = inject(Firestore);
  private agentsCollection = collection(this.firestore, 'agents');

  addAgent(agent: Agent) {
    const agentRef = doc(this.agentsCollection, agent.uid);
    return from(getDoc(agentRef)).pipe(
      switchMap(docSnap => {
        const dataToSet: any = { ...agent };
        if (!docSnap.exists()) {
          dataToSet.createdAt = serverTimestamp();
        }
        return from(setDoc(agentRef, dataToSet, { merge: true }));
      })
    );
  }

  getAgent(uid: string) {
    const agentRef = doc(this.agentsCollection, uid);
    return from(getDoc(agentRef));
  }

  saveDisplayName(uid: string, displayName: string) {
    const agentRef = doc(this.agentsCollection, uid);
    return from(updateDoc(agentRef, { displayName: displayName }));
  }
}
