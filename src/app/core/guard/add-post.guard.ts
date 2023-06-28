import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AddPostGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn:boolean = false
      this.api.isLoggedIn.subscribe((res)=>{
        isLoggedIn = res;
      })
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['auth/sign-in']);
        return false;
      }
  }
  
}
