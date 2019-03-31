import { Component,OnInit } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { FirebaseService } from './shared/firebase.service';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit{
  title = 'CourseManagement';
  isUserLoggedIn: boolean;
  constructor(private auth: FirebaseService) {

  }

  ngOnInit() {
    this.auth.user$.subscribe(              
          user => {
            if(user) {
              this.isUserLoggedIn = true;
              console.log('Root Module: usr is logged in.')
            } else {
              this.isUserLoggedIn = false;
              console.log('Root Module: usr is not logged in.')
            }
          }
    )
  }
}
