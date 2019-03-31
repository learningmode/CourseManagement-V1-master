import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth){
    this.user$ = this.afAuth.authState;
   }

   login(credentials){        
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)                    
  }

    logout() {
        return this.afAuth.auth.signOut();
    }

    verify() { }

}
