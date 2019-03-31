import { Component, OnInit,Input } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userLoggedIn: boolean;

  constructor(private auth : FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout()
        .then(response => {
          console.log('logout response : ',response);
          this.router.navigate(['/login']);
        },
              error => console.log(error)
        )
  }  

}
