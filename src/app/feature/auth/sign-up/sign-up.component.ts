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
  constructor(private _fb: FormBuilder, private router: Router, private api: ApiService) {}
  
  ngOnInit(): void {
    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone_no: ['',Validators.required]
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
