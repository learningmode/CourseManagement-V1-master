import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SpaceValidator } from './space.validator';
import { FirebaseService } from '../../shared/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  error;
  
  constructor(fb: FormBuilder,private auth: FirebaseService, private route: Router) { 
    this.form = fb.group({
      account : fb.group({
        email: ['',
          [
            Validators.required,
          Validators.minLength(3),
            SpaceValidator.cannotContainSpace
          ]           
        ],
        password: new FormControl('', Validators.required),
      })   
    })
  }

  ngOnInit() {
  }

  log() {
    console.log('test');
  }

  get username() {
    return this.form.get('account.email');
  }

  registration() {
    let val = this.form.value.account;

    this.auth.signup(val.email, val.password)
        .then(
          response => {
            this.route.navigate(['/login'])
          },
          error => {
            this.error = true;
          }
        );

  }

  

  




}
