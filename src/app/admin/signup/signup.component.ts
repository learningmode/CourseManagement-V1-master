import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SpaceValidator } from './space.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) { 
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
    console.log(this.form);

    //Suppose we are getting error on registration.

    this.form.setErrors({
      invalidForm: true
    })
  }
}
