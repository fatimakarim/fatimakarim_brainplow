import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HomeService} from "./home.service";
import {Subscription} from 'rxjs/Subscription';
import {Http, Response} from '@angular/http';
import {applyRedirects} from "@angular/router/src/apply_redirects";
import {Router} from "@angular/router";

export class errorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    zipCode = '';
    matcher = new errorMatcher();

    constructor(private obj: HomeService, private router: Router) {

    }

    onSubmit(f: NgForm) {
        this.router.navigate(['/products/'+this.zipCode]);
    }

    digitsOnly = '^[0-9,-]+$';
  //  public model: any = {};
    public results: any;
    public zip;
    promo = new FormControl('', [
        Validators.pattern(this.digitsOnly)
    ]);
    zip_code = new FormControl('',[
        Validators.pattern(this.digitsOnly)
    ]);

    ngOnInit() {

    }
}
