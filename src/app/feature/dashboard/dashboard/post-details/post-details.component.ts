import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
declare var $:any;
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  blogDetails: any;
  blogDescription: any = [];
  isLoggedIn: boolean = false;
  commentMsg: any;
  commentDetailForm!: FormGroup;
  errorMessage: any;
  emailPattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneNoPattern: any = /^[0-9]{10}$/;
  showCommentBtn: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private _fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    let blogId = this.route.snapshot.params['id'];
    this.getBlogDetails(blogId);
    this.api.isLoggedIn.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
    this.initializeForm();
  }

  getBlogDetails(blogId: any) {
    this.api.getBlogById(blogId).subscribe((res: any) => {
      this.blogDetails = res;
      this.blogDescription = this.blogDetails.description.split('.');
    });
  }

  initializeForm() {
    this.commentDetailForm = this._fb.group({
      email: ['', Validators.required],
      commentMsg:['',Validators.required]
    });
  }

  getFirstName() {
    return this.commentDetailForm.controls['firstName'] as FormControl;
  }

  postComment() {
    let payload = {
      commentMsg: this.commentDetailForm.controls['commentMsg'].value,
      email: this.commentDetailForm.controls['email'].value,
      blogDetails: this.blogDetails
    }
    this.api.saveComment(payload).subscribe((res:any)=>{
      alert("Comment Added Successfully")
      this.router.navigate(['/dashboard/posts']);
    })
  }
}
