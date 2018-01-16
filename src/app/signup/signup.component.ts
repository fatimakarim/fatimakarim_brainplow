import {Component, Directive, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgControl, RadioControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {

    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;

    normalPattern = '[a-zA-Z0-9_.-]+?';
    digitsOnly = '^[0-9,-]+$';
    email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

    flag = true;
    date = new FormControl(new Date());

    billingAddress = [
        {
            staddress: '17250 Knoll Trail Dr Apt 1401',
            city: 'Dallas',
            state: 'Texas',
            zip: '752481155'
        }
    ];

    aprtName; staddress; city; state; zip;
    signupAddress = 0;

    sQuestion = [
        {value: 'Security Question 1'},
        {value: 'Security Question 2'},
        {value: 'Security Question 3'},
        {value: 'Security Question 4'},
        {value: 'Security Question 5'}
    ];

    constructor(private _formBuilder: FormBuilder) { }
    serviceType;
    // checkValue(item): void {
    //     if(item == 'movein') {
    //         console.log('movein');
    //     }
    // }
    // onlySSN(): void {
    //     if(this.SSN.value > '') {
    //         this.flag = false;
    //         console.log('not empty');
    //     } else {
    //         this.flag = true;
    //         console.log('empty');
    //     }
    // }

    ngOnInit() {

        this.firstFormGroup = this._formBuilder.group({
            serviceType: ['', Validators.compose([Validators.required])],
        });

        this.secondFormGroup = this._formBuilder.group({
            fName: ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
            mName: ['', Validators.compose([Validators.pattern(this.normalPattern)])],
            lName: ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
            authRepresent: ['', Validators.compose([Validators.pattern(this.normalPattern)])],
            dateofbirth: ['', Validators.compose([Validators.required])],

            aprtName: ['', Validators.compose([Validators.pattern(this.normalPattern)])],
            staddress: [this.billingAddress[0].staddress, Validators.compose([Validators.required])],
            city: [this.billingAddress[0].city, Validators.compose([Validators.required,Validators.pattern(this.normalPattern)])],
            state: [this.billingAddress[0].state, Validators.compose([Validators.required,Validators.pattern(this.normalPattern)])],
            zip: [this.billingAddress[0].zip, Validators.compose([Validators.required,Validators.pattern(this.digitsOnly)])],
        });

        this.thirdFormGroup = this._formBuilder.group({
            SSN: ['', Validators.compose([Validators.required,Validators.pattern(this.digitsOnly)])],
            driverLisence: ['', Validators.compose([Validators.pattern(this.digitsOnly)])],
            lisenceState: ['', Validators.compose([Validators.pattern(this.normalPattern)])],
        });

        this.fourthFormGroup = this._formBuilder.group({

        });

        this.fifthFormGroup = this._formBuilder.group({
            choosingLLC: ['', Validators.compose([Validators.required])],
            authPerson: ['', Validators.compose([Validators.required])],
            readDocs: ['', Validators.compose([Validators.required])],
        });

    }

    ifChecked(e) {
        if ( e.target.checked ) {
            console.log('checked');
            this.signupAddress = 0;
        } else {
            console.log('un-checked');
            this.signupAddress = 1;
        }
    }

    onSubmit(f) {

    }
}
