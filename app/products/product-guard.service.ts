import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate  {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            alert('Invalid product id' + route.url[1].path);
            this._router.navigate(['/products']);
            return false;   
        }
        
        return true;
    }
}