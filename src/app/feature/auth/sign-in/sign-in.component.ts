import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  passwordPattern: any =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/;
  emailPattern: any =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private readonly _fb: FormBuilder, private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.signInForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required,Validators.pattern(this.passwordPattern)]],
    });
  }

  get form() {
    return this.signInForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    if (this.signInForm.status === 'VALID') {
      this.api.login().subscribe({
        next: (res: any) => {
          let response: any = res;
          const user = response.find((a: any) => {
            return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password;
          });
          if(user){
            alert("Login Successfully!!!!")
            localStorage.setItem("user",JSON.stringify(response));
              localStorage.setItem("isLoggedIn",'true');
              this.router.navigate(['/dashboard']);
              this.api.isLoggedIn.next(true)
          }else{
            alert("Invalid Credentials")
            this.router.navigate(['/sign-in']);
          }
        },
        error: (err: any) => {
          alert("Internal Server Error")
        },
      });
    }else{
    }
  }
}
