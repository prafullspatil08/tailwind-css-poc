import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  addPostForm!: FormGroup;
  technologies = ['Java','Python','Php','C','C++','Javascript','SwiftUI','Flutter','Other']
  errorMessage:any = {
    type:'', message: ''

  };
  constructor(private _fb:FormBuilder, private api:ApiService, private router: Router){}
  ngOnInit(): void {
    this.addPostForm = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description : ['',Validators.required],
      publish_date:[new Date()],
      techType:['',[Validators.required]]
    })
  }

  addPost(){
    if(this.addPostForm.status == 'VALID'){
      this.api.postBlog(this.addPostForm.value).subscribe((res)=>{
        alert('Post Added Successfully')
        localStorage.setItem("post",JSON.stringify(this.addPostForm.value));
        this.router.navigate(['/dashboard/posts']);
      } )
    }else{
      alert('Please Enter Valid Details')
    }
  }

}
