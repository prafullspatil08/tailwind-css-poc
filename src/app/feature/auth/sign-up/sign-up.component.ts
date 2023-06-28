import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!:FormGroup  ;
  passwordTextType!: boolean;
  submitted = false;
  passwordPattern: any =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/;
  emailPattern: any =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  mobilePattern = /^[0-9]{10}$/
  constructor(private _fb: FormBuilder, private router: Router, private api: ApiService) {}
  
  ngOnInit(): void {
    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required,Validators.pattern(this.passwordPattern)]],
      phone_no: ['',[Validators.required,Validators.pattern(this.mobilePattern)]]
    });
  }

  get form() {
    return this.signUpForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit(){
    this.submitted = true
    if(this.signUpForm.status == 'VALID'){
      this.api.signUp(this.signUpForm?.value).subscribe((res)=> {
        alert("Register Successfully");
        this.signUpForm.reset({});
        this.router.navigate(['/auth/sign-in']);
      }, (error:any)=>{
        alert("Internal Server Error")
      });
    }
  }
}
