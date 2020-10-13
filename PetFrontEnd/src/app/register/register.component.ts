// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   registerFormGroup: FormGroup;
//   ufc: FormControl;
//   pfc: FormControl;
//   cpfc: FormControl;
//   constructor() { }
//
//   ngOnInit(): void {
//     this.ufc = new FormControl(
//       '',
//       [Validators.required]
//     );
//     this.pfc = new FormControl();
//     this.cpfc = new FormControl();
//     this.registerFormGroup = new FormGroup({
//       username: this.ufc,
//       password: this.pfc,
//       confirm_password: this.cpfc
//     });
//     // subscribe the valueChanges
//     this.ufc.valueChanges.subscribe(val => console.log(val));
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Location} from '@angular/common';
import {environment} from '../../environments/environment';
import {newArray} from '@angular/compiler/src/util';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  // registerFormGroup;
  handleRegister(): void{
    const newUser = {
      email: this.registerFormGroup.value.email,
      username: this.registerFormGroup.value.username,
      password: this.registerFormGroup.value.password_group.password,
    };
    this.auth.register(newUser)
      .subscribe(response => {
        if (response.success){
          // go back to previous route! angular will maintain a route stack!
          // this.location.replaceState(`${environment.API_URL}/login`);
          this.router.navigate(['login', {queryParams: { registered: 'true' } }]);

          //this.location.back();
        }
      });
  }
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private location: Location,
              private router: Router) { }
  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      // username: ['', [Validators.required], Validators.minLength(4)],
      username: [ '' , [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email] ],
      password_group: this.fb.group({
        password: [''],
        confirm_password: ''
      }, { validators: [this.passwordsValidator, Validators.minLength(6)] })
    });
    // const newUser = {
    //   email: this.registerFormGroup.value.email,
    //   username: this.registerFormGroup.value.username,
    //   password: this.registerFormGroup.value.password_group.password,
    // };
  }
  // Validator return type can only be
  // null (no error) or object {errorCode: errorMessage}
  passwordsValidator(passwordGroup): null|object{
    // object destructure
    const {password, confirm_password} = passwordGroup.value;
    // console.log(passwordGroup.value);
    if (password != null && password.length < 6) { return  {passwordsNotMatch: 'too short!'}; }
    return password === confirm_password ? null : {passwordsNotMatch: 'passwords do not match'};
  }
}

