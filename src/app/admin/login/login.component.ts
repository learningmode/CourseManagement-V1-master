import { Component, OnInit } from '@angular/core';
import { FirebaseService} from 'src/app/shared/firebase.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  error: any;
  constructor(private auth: FirebaseService, private router: Router ) { }

  ngOnInit() {
  }
  
   log(){
      this.error = false;
   }
login(form){
  this.error = false;
  this.auth.login(form.value).then(
      response => {
        this.router.navigate(['/courses']);
      },
      error => {
       this.error = true;
      }
  )
}

}
